import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";

class AssetService {
  public async getByClient(id: number) {
    const clientAssets = await Accounts.findAll( { attributes: ['userId', 'assetId', 'assetQuantity', 'assetValue'], where: { userId: id } } );
    return clientAssets;
  }

  public async getByAsset(id: number) {
    const asset = await Assets.findOne({ where: { id } });
    return { id: asset?.id, codAtivo: asset?.ticker, quantidade: asset?.quantity, valor: asset?.value };
  }

}

export default AssetService;