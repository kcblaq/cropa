import  { Express, Request, Response } from 'express';
import {config} from "./config";
const express = require('express');

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Code with Rico. Ready to run on Heroku.');
});

app.listen(config.server.port, () => {
    return console.log(`Server is running on ${config.server.port}`);
});
