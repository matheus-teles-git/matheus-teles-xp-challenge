import Accounts from "../database/models/AccountModel";
import Assets from "../database/models/AssetModel";

interface IGetByClient {
  userId: number;
  assetId: number;
  assetQuantity: number;
  assetValue: number;
}

class AssetService {
  public async getByClient(id: number) {
    const clientAssets: IGetByClient[] = await Accounts.findAll( { raw: true, attributes: ['userId', 'assetId', 'assetQuantity', 'assetValue' ], where: { userId: id } } );
    return clientAssets;
  }

  public async getByAsset(id: number) {
    const asset = await Assets.findOne({ where: { id } });
    if (asset === null) return null;
    return { id: asset?.id, codAtivo: asset?.ticker, quantidade: asset?.quantity, valor: asset?.value };
  }

}

export default AssetService;