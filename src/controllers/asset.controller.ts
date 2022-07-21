import { Request, Response } from 'express';
import AssetService from '../services/asset.service';

class AssetController {
  constructor(private assetService = new AssetService()) {}

  public getByClient = async (request: Request, response: Response) => {
    const { id } = request.params;
    const clientAssets = await this.assetService.getByClient(Number(id));
    return response.status(200).json(clientAssets);
  }

}

export default AssetController;