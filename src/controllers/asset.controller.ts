import { Request, Response } from 'express';
import AssetService from '../services/asset.service';

class AssetController {
  constructor(private assetService = new AssetService()) {}

  public getByClient = async (request: Request, response: Response) => {
    const { id } = request.params;
    const clientAssets = await this.assetService.getByClient(Number(id));
    return response.status(200).json(clientAssets);
  }

  public getByAsset = async (request: Request, response: Response) => {
    const { id } = request.params;
    const assetInfo = await this.assetService.getByAsset(Number(id));
    if (assetInfo ===  null) {
      return response.status(404).json({ message: 'Asset not found' });
    }
    return response.status(200).json(assetInfo);
  }

}

export default AssetController;