import express from 'express'
import {register as regesterLogin} from './endpoints/login';

const app = express();

/**
 * Regester Endpoints
 */
regesterLogin(app);
 
app.listen(8080);