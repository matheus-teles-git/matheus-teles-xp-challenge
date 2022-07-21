import Accounts from "../database/models/AccountModel";

class AssetService {
  public async getByClient(id: number) {
    const clientAssets = await Accounts.findAll( { attributes: ['userId', 'assetId', 'assetQuantity', 'assetValue'], where: { userId: id } } );
    return clientAssets;
  }

}

export default AssetService;