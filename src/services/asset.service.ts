import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";

class AssetService {
  public async getByClient(id: number) {
    const clientAssets = await Accounts.findAll({ where: { id } });
    const assets: object[] = [];
    clientAssets.forEach(async (entry) => {
      const x = await Assets.findOne({ where: { id: entry.assetId } });
      const e = { codCliente: entry.userId, codAtivo: entry.assetId, qtdeAtivo: entry.assetQuantity, valor: x?.value };
      assets.push(e);
    })
    return assets;
  }

}

export default AssetService;