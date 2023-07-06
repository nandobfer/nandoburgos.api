"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsServer = exports.clients = void 0;
const ws_1 = require("ws");
exports.clients = [];
exports.wsServer = new ws_1.WebSocketServer({ noServer: true });
const getClient = (id) => {
    const client = exports.clients.filter((item) => item.user.id == id)[0];
    return client;
};
const syncPlayers = (client) => {
    const data = exports.clients.filter((item) => item.player).filter((item) => item.user.id != client.user.id);
    client.connection.send(JSON.stringify({ syncPlayers: { clients: data } }));
};
const registerNewPlayer = (client, player) => {
    client.player = player;
    console.log({ player });
    // console.log({ client })
};
exports.wsServer.on("connection", (connection) => {
    console.log("new connection");
    connection.on("message", (message) => {
        const data = JSON.parse(message.toString());
        // Object.entries(data).map(([key, value]) => console.log({ websocket: key }))
        if (data.connect) {
            const filtered_clients = exports.clients.filter((client) => client.user.id == data.connect.user.id);
            if (filtered_clients.length > 0) {
                exports.clients = exports.clients.filter((client) => client.user.id != data.connect.user.id);
            }
            const client = { user: data.connect.user, connection, player: data.connect.player };
            exports.clients.push(client);
            client.connection.send(JSON.stringify({ connected: true }));
            registerNewPlayer(client, data.connect.player);
            syncPlayers(client);
        }
        if (data.syncPlayers) {
            const client = getClient(data.syncPlayers.player.id);
            client.player = data.syncPlayers.player;
            syncPlayers(client);
        }
    });
});
