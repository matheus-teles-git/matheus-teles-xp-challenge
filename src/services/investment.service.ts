import { evaluate } from "mathjs";
import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";
import Users from "../database/models/UserModel";
import IInvestmentRequest from "../interfaces/investmentRequest.interface";

//both methods are too verbose, need refactoring
class InvestmentService { 
  public async buyAsset(payload: IInvestmentRequest) {
    const retrieveAccountBalance = await Users.findOne({ where: { id: Number(payload.codCliente) }})
    const retrieveAsset = await Assets.findOne({ where: { id: payload.codAtivo }});
    const retrieved = retrieveAsset?.quantity;
    if (retrieved != undefined && payload.qtdeAtivo > retrieved) return false;
    const operation = evaluate(`${payload.qtdeAtivo} * ${retrieveAsset?.value}`)
    if (retrieveAccountBalance?.balance != undefined && operation > retrieveAccountBalance?.balance) return null;
    const newAccountBalance = evaluate(`${retrieveAccountBalance?.balance} - ${operation}`);
    await Users.update({ balance: newAccountBalance}, { where: { id: payload.codCliente } });
    const checkCustody = await Accounts.findOne({
        attributes: ['assetQuantity', 'userId', 'assetId', ],
        where: { userId: payload.codCliente, assetId: payload.codAtivo }
      });
    if (checkCustody === null) {
      const newCustody = await Accounts.create(
        { userId: payload.codCliente,
          assetId: payload.codAtivo,
          assetQuantity: payload.qtdeAtivo,
          assetValue: retrieveAsset?.value
        });
      return newCustody;
    }
    await Accounts.update(
      { assetQuantity: evaluate(`${checkCustody?.assetQuantity} + ${payload.qtdeAtivo}`) },
      { where: {
        userId: payload.codCliente,
        assetId: payload.codAtivo
        }
      });
    await Assets.update( 
      { quantity: evaluate(`${retrieveAsset?.quantity} - ${payload.qtdeAtivo}`)},
      { where: { id: payload.codAtivo }}
      );
    return { userId: payload.codCliente,
      assetId: payload.codAtivo, 
      assetQuantity: evaluate(`${checkCustody?.assetQuantity} + ${payload.qtdeAtivo}`), 
      assetvalue: retrieveAsset?.value };
  }

  public async sellAsset(payload: IInvestmentRequest) {
    const retrieveAccountBalance = await Users.findOne({ where: { id: payload.codCliente }})
    const retrieveAssetBalance = await Assets.findOne({ where: { id: Number(payload.codAtivo) }})
    const retrieveAsset = await Accounts.findOne({ attributes: ['assetQuantity', 'userId', 'assetId'], where: { userId: Number(payload.codCliente), assetId: Number(payload.codAtivo) }});
    // const retrieved = retrieveAsset?.assetQuantity;
    // if (retrieved != undefined && payload.qtdeAtivo > retrieved) return false;
    const operation = evaluate(`${payload.qtdeAtivo} * ${retrieveAssetBalance?.value}`)
    if (retrieveAsset?.assetQuantity != undefined && payload.qtdeAtivo > retrieveAsset?.assetQuantity) return null;
    const newAccountBalance = evaluate(`${retrieveAccountBalance?.balance} + ${operation}`);
    await Users.update({ balance: newAccountBalance}, { where: { id: payload.codCliente } });
    const checkCustody = await Accounts.findOne({
        attributes: ['assetQuantity', 'userId', 'assetId'],
        where: { userId: payload.codCliente, assetId: payload.codAtivo }
      });
    // if (checkCustody === null) {
    //   const newCustody = await Accounts.create(
    //     { userId: payload.codCliente,
    //       assetId: payload.codAtivo,
    //       assetQuantity: payload.qtdeAtivo,
    //       assetValue: retrieveAssetBalance?.value
    //     });
    //   return newCustody;
    // }
    await Accounts.update(
      { assetQuantity: evaluate(`${checkCustody?.assetQuantity} - ${payload.qtdeAtivo}`) },
      { where: {
        userId: payload.codCliente,
        assetId: payload.codAtivo
        }
      });
    await Assets.update( 
      { quantity: evaluate(`${retrieveAssetBalance?.quantity} + ${payload.qtdeAtivo}`)},
      { where: { id: payload.codAtivo }}
      );
    return { userId: payload.codCliente,
      assetId: payload.codAtivo, 
      assetQuantity: evaluate(`${checkCustody?.assetQuantity} - ${payload.qtdeAtivo}`), 
      assetvalue: retrieveAsset?.assetValue };
  }



}

export default InvestmentService;