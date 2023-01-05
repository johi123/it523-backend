/**
 * Error class for global HTTP response handling
 */
export class HttpError extends Error {
    statusCode: string;

    status: string;

    stack?: string; // Some errors do not have a stack trace

    constructor(message: string, statusCode: number|string) {
        super(message);

        this.statusCode = `${statusCode}`;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        Error.captureStackTrace(this, this.constructor);
    }
}
