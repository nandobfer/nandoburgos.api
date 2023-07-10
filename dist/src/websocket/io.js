"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConnection = exports.clientList = void 0;
const rooms_1 = require("./rooms");
const game_1 = require("./game");
exports.clientList = [];
const gameClient = (client) => {
    const gameClient = { player: client.player, user: client.user };
    return gameClient;
};
const clients = {
    get: (socket) => exports.clientList.filter((client) => client.connection == socket)[0],
    convert: (client) => gameClient(client),
    list: () => {
        return exports.clientList.map((client) => ({ player: client.player, user: client.user }));
    },
    add: (client) => exports.clientList.push(client),
    remove: (client) => {
        exports.clientList = exports.clientList.filter((item) => item.connection != client);
    },
};
const onConnection = (socket) => {
    console.log("new io connection");
    (0, rooms_1.handleUi)(socket, clients);
    (0, game_1.handleGame)(socket, clients);
    socket.on("disconnect", () => {
        var _a;
        const client = clients.get(socket);
        console.log(`${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.name} disconnected`);
        clients.remove(client);
        socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user });
    });
};
exports.onConnection = onConnection;
