import express, {Request, Response, NextFunction} from 'express'
import accessLogger from './middleware/accessLogger';
import * as loginEndpoints from './endpoints/login';
import * as userEndpoints from './endpoints/user'

const app = express();

/**
 * Register Middleware
 */
app.use(accessLogger);

/**
 * Regester Endpoints
 */
loginEndpoints.register(app);
userEndpoints.register(app);
 
app.listen(8080);