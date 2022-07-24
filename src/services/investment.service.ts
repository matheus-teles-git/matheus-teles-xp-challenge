import { evaluate } from "mathjs";
import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";
import Users from "../database/models/UserModel";
import IInvestmentRequest from "../interfaces/investmentRequest.interface";

//both methods are too verbose, need refactoring
class InvestmentService { 
  public async buyAsset(payload: IInvestmentRequest) {
    const retrieveAccountBalance = await Users.findOne({ where: { id: Number(payload.userId) }})
    const retrieveAsset = await Assets.findOne({ where: { id: payload.assetId }});
    const retrieved = retrieveAsset?.quantity;
    if (retrieved != undefined && payload.assetQuantity > retrieved) return false;
    const operation = evaluate(`${payload.assetQuantity} * ${retrieveAsset?.value}`)
    if (retrieveAccountBalance?.balance != undefined && operation > retrieveAccountBalance?.balance) return null;
    const newAccountBalance = evaluate(`${retrieveAccountBalance?.balance} - ${operation}`);
    await Users.update({ balance: newAccountBalance}, { where: { id: payload.userId } });
    const checkCustody = await Accounts.findOne({
        attributes: ['assetQuantity', 'userId', 'assetId', ],
        where: { userId: payload.userId, assetId: payload.assetId }
      });
    if (checkCustody === null) {
      const newCustody = await Accounts.create(
        { userId: payload.userId,
          assetId: payload.assetId,
          assetQuantity: payload.assetQuantity,
          assetValue: retrieveAsset?.value
        });
      return newCustody;
    }
    await Accounts.update(
      { assetQuantity: evaluate(`${checkCustody?.assetQuantity} + ${payload.assetQuantity}`) },
      { where: {
        userId: payload.userId,
        assetId: payload.assetId
        }
      });
    await Assets.update( 
      { quantity: evaluate(`${retrieveAsset?.quantity} - ${payload.assetQuantity}`)},
      { where: { id: payload.assetId }}
      );
    return { userId: payload.userId,
      assetId: payload.assetId, 
      assetQuantity: evaluate(`${checkCustody?.assetQuantity} + ${payload.assetQuantity}`), 
      assetvalue: retrieveAsset?.value };
  }

  public async sellAsset(payload: IInvestmentRequest) {
    const retrieveAccountBalance = await Users.findOne({ where: { id: payload.userId }})
    const retrieveAssetBalance = await Assets.findOne({ where: { id: Number(payload.assetId) }})
    const retrieveAsset = await Accounts.findOne({ attributes: ['assetQuantity', 'userId', 'assetId'], where: { userId: Number(payload.userId), assetId: Number(payload.assetId) }});
    const operation = evaluate(`${payload.assetQuantity} * ${retrieveAssetBalance?.value}`)
    if (retrieveAsset?.assetQuantity != undefined && payload.assetQuantity > retrieveAsset?.assetQuantity) return null;
    const newAccountBalance = evaluate(`${retrieveAccountBalance?.balance} + ${operation}`);
    await Users.update({ balance: newAccountBalance}, { where: { id: payload.userId } });
    const checkCustody = await Accounts.findOne({
        attributes: ['assetQuantity', 'userId', 'assetId'],
        where: { userId: payload.userId, assetId: payload.assetId }
      });
    await Accounts.update(
      { assetQuantity: evaluate(`${checkCustody?.assetQuantity} - ${payload.assetQuantity}`) },
      { where: {
        userId: payload.userId,
        assetId: payload.assetId
        }
      });
    await Assets.update( 
      { quantity: evaluate(`${retrieveAssetBalance?.quantity} + ${payload.assetQuantity}`)},
      { where: { id: payload.assetId }}
      );
    return { userId: payload.userId,
      assetId: payload.assetId, 
      assetQuantity: evaluate(`${checkCustody?.assetQuantity} - ${payload.assetQuantity}`), 
      assetvalue: retrieveAsset?.assetValue };
  }



}

export default InvestmentService;