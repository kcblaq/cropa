"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;
exports.config = {
    server: {
        port: PORT
    }
};
//# sourceMappingURL=config.js.map