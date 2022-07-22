import { evaluate } from "mathjs";
import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";
import Users from "../database/models/UserModel";

interface IInvestmentRequest {
  codCliente: number;
  codAtivo: number;
  qtdeAtivo: number;
}

class InvestmentService { 
  public async buyAsset(payload: IInvestmentRequest) {
    const retrieveAccountBalance = await Users.findOne({ where: { id: Number(payload.codCliente) }})
    const retrieveAsset = await Assets.findOne({ where: { id: payload.codAtivo }});
    const retrieved = retrieveAsset?.quantity;
    if (retrieved != undefined && payload.qtdeAtivo > retrieved) {
      return false;
    }
    const operation = evaluate(`${payload.qtdeAtivo} * ${retrieveAsset?.value}`)
    if (retrieveAccountBalance?.balance != undefined && operation > retrieveAccountBalance?.balance) {
      return null;
    }
    const newAccountBalance = evaluate(`${retrieveAccountBalance?.balance} - ${operation}`);
    await Users.update({ balance: newAccountBalance}, { where: { id: payload.codCliente } });
    const checkCustody = await Accounts.findOne({ where: { userId: payload.codCliente, assetId: payload.codAtivo } });
    if (checkCustody === null) {
      const newCustody = await Accounts.create({ userId: payload.codCliente, assetId: payload.codAtivo, assetQuantity: payload.qtdeAtivo, assetValue: retrieveAsset?.value });
      return newCustody;
    }
    const newAssetQuantity = evaluate(`${retrieveAsset?.quantity} + ${payload.qtdeAtivo}`)
    await Accounts.update({assetQuantity: newAssetQuantity }, { where: {userId: payload.codCliente, assetId: payload.codAtivo } });
    return { userId: payload.codCliente, assetId: payload.codAtivo, assetQuantity: newAssetQuantity, assetvalue: retrieveAsset?.value };
  }

}

export default InvestmentService;