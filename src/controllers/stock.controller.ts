import { Service } from 'typedi';
import { LoggerService } from '../services/logger.service';
import { NextFunction, Request, Response } from 'express';
import { StockService } from '../services/stock.service';

@Service()
export class StockController {
  private readonly _name = StockController.name;

  constructor(private _logger: LoggerService, private _stockService: StockService) {
  }

  get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const matchData = await this._stockService.getGames(req.query.dateFrom as string, req.query.dateTo as string);
      const stockData = await this._stockService.getStockData(req.query.dateFrom as string, req.query.dateTo as string);

      res.status(200).json({ matchData, stockData });
    } catch (e) {
      console.log(e);
      this._logger.error(`Could not get stock information: ${e.toString()}`, this._name);
      next(e);
    }
  };
}
