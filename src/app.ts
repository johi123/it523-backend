import * as express from "express";
import * as httpLogger from "morgan";
import * as bodyParser from "body-parser";
import * as http from "http";
import helmet from "helmet";

import { Container } from "typedi";

import "reflect-metadata";

import { appPort } from './configs/app.config';
import { LoggerService } from "./services/logger.service";
import { routes } from './routes';
import { HttpError } from './utils/http.error';

/**
 * INITIALIZATION
 */
const app = express();
const logger = Container.get(LoggerService);

/**
 * MIDDLEWARE
 */
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(httpLogger("tiny", { stream: logger.stream() }));

/**
 * ROUTE IMPORTS
 */
app.use("/api/", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  logger.warn(`${req.ip} tried to reach ${req.originalUrl}`, "app");
  next(new HttpError("Not Found", 404));
});

http.createServer(app).listen(appPort, () => {
  logger.info(`Server listening on port ${appPort}`, "app");
});

/**
 * INTERRUPT HANDLING
 */
process.on("unhandledRejection", (e) => {
  logger.error(`UNHANDLED REJECTION! - ${e?.toString()} - Shutting down...`, "app");
  console.log(e);
  process.exit(1);
});

process.on("SIGINT", () => {
  logger.warn("Service shutdown", "app");
  process.exit();
});
