import express from 'express'
import * as loginEndpoints from './endpoints/login';
import * as userEndpoints from './endpoints/user'

const app = express();

/**
 * Regester Endpoints
 */
loginEndpoints.register(app);
userEndpoints.register(app);
 
app.listen(8080);