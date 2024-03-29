import { Request, Response } from 'express';
import InvestmentService from "../services/investment.service";

class InvestmentController {
  constructor(private investmentService = new InvestmentService()) {}

  public buyAsset = async (request: Request, response: Response) => {
    const payload = request.body;
    const buy = await this.investmentService.buyAsset(payload);
    if (buy === null) {
      return response.status(422).json({ message: 'Not enough account balance' });     
    }
    if (buy === false) {
      return response.status(422).json({ message: 'Not enough assets available to buy' });
    }
    return response.status(200).json(buy);
  }

  public sellAsset = async (request: Request, response: Response) => {
    const payload = request.body;
    const sell = await this.investmentService.sellAsset(payload);
    if (sell === null) {
      return response.status(422).json({ message: 'Not enough assets on your account to sell' });
    }
    return response.status(200).json(sell);
  }

}

export default InvestmentController;