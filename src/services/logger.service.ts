import { Service } from "typedi";
import {
    transports,
    format,
    createLogger,
} from "winston";

/**
 * Logger class
 */
@Service()
export class LoggerService {
    private _logger;

    /**
     * Create winston logger instance
     */
    constructor() {
        this._logger = createLogger({
            level: (process.env.NODE_ENV === "production" && process.env.DEBUG !== "true") ? "info" : "debug",
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.printf((info) => `[${info.timestamp}] ${info.level} | ${info.instance}: ${info.message}`),
            ),
            transports: [
                new transports.Console(),
            ],
            silent: false,
        });
    }

    /**
     * Creates log stream object for morgan http logs
     * @function stream
     * @return { write: (message: string) => void }
     */
    stream(): { write: (message: string) => void } {
        this._logger.stream = {
            write: (message: string): void => {
                this.debug(message.replace("\n", ""), "HTTP Request");
            },
        };

        return this._logger.stream;
    }

    /**
     * DEBUG logging
     * @function debug
     * @param {string} message  Log message
     * @param {string} instance Name of the class|file who triggers the log output
     */
    debug(message: string, instance: string): void {
        this._logger.debug(message, { instance });
    }

    /**
     * INFO logging
     * @function info
     * @param {string} message  Log message
     * @param {string} instance Name of the class|file who triggers the log output
     */
    info(message: string, instance: string): void {
        this._logger.info(message, { instance });
    }

    /**
     * WARN logging
     * @function warn
     * @param {string} message  Log message
     * @param {string} instance Name of the class|file who triggers the log output
     */
    warn(message: string, instance: string): void {
        this._logger.warn(message, { instance });
    }

    /**
     * ERROR logging
     * @function error
     * @param {string} message  Log message
     * @param {string} instance Name of the class|file who triggers the log output
     */
    error(message: string, instance: string): void {
        this._logger.error(message, { instance });
    }
}
