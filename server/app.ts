import express from 'express';
import subdomain from 'express-subdomain';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import { Request, Response } from 'express';

var apiRouter = require('./routes/api').default;

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', apiRouter);
//app.use(subdomain('api', apiRouter));
app.use(express.static(path.join(__dirname, '/public/')));

app.get(/.*/, (_req: Request, res: Response): void =>
    res.sendFile(__dirname + '/public/index.html'));


module.exports = app;
