import {Request, Response, NextFunction, request} from 'express'
import logger from '../logger';

export default function accessLogger(req: Request, res: Response, next: NextFunction) {
    logger.info(`Endpoint: ${req.url} ${req.method}`);
    next();
}