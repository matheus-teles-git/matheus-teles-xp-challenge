import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";

// interface IClientAssets {
//   codCliente: number;
//   codAtivo: number,
//   qtdAtivo: number,
//   valor: number,
// }

class AssetService {

  public async getByClient(id: number) {
    const clientAssets = await Accounts.findAll({ where: { id } });
    const x: object[] = [] 
    clientAssets.forEach(async (entry) => {
      const value = await Assets.findOne({ where: { id: entry.assetId } });
      const ret = { codCliente: entry.userId, codAtivo: entry.assetId, qtdAtivo: entry.assetQuantity, valor: value }
      x.push(ret)
    })
    return x
  }
}

export default AssetService;