"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Code with Rico. Ready to run on Heroku.');
});
app.listen(config_1.config.server.port, () => {
    return console.log(`Server is running on ${config_1.config.server.port}`);
});
//# sourceMappingURL=index.js.map