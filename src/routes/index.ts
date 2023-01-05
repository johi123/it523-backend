import { Router } from 'express';
import { Container } from 'typedi';
import { StockController } from '../controllers/stock.controller';

export const routes = Router();

const stockController = Container.get(StockController);

routes.get("/stocks", stockController.get);
