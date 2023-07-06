"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const socket_1 = require("./src/websocket/socket");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.router);
try {
    const server = https_1.default.createServer({
        key: fs_1.default.readFileSync("/etc/letsencrypt/live/app.agenciaboz.com.br/privkey.pem", "utf8"),
        cert: fs_1.default.readFileSync("/etc/letsencrypt/live/app.agenciaboz.com.br/cert.pem", "utf8"),
        ca: fs_1.default.readFileSync("/etc/letsencrypt/live/app.agenciaboz.com.br/chain.pem", "utf8"),
    }, app);
    server.listen(port, () => {
        console.log(`[server]: Server is running at https ${port}`);
    });
    server.on("upgrade", (request, socket, head) => {
        socket_1.wsServer.handleUpgrade(request, socket, head, (socket) => {
            socket_1.wsServer.emit("connection", socket, request);
        });
    });
}
catch (_a) {
    const server = http_1.default.createServer(app);
    server.listen(port, () => {
        console.log(`[server]: Server is running at http ${port}`);
    });
    server.on("upgrade", (request, socket, head) => {
        socket_1.wsServer.handleUpgrade(request, socket, head, (socket) => {
            socket_1.wsServer.emit("connection", socket, request);
        });
    });
}
