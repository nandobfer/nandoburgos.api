"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConnection = exports.clients = void 0;
exports.clients = [];
const getClient = (socket) => {
    const client = exports.clients.filter((client) => client.connection == socket)[0];
    return client;
};
const listClients = () => {
    return exports.clients.map((client) => ({ player: client.player, user: client.user }));
};
const onConnection = (socket) => {
    console.log("new io connection");
    // there is no handling in client yet
    socket.on("disconnect", () => {
        const client = getClient(socket);
        console.log(`${client.user.name} disconnected`);
        exports.clients = exports.clients.filter((client) => client.connection != socket);
        socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user });
    });
    socket.on("player:new", (data) => {
        const player = data.player;
        const user = data.user;
        const client = {
            connection: socket,
            player,
            user,
        };
        socket.broadcast.emit("player:new", { player, user });
        socket.emit("players", listClients());
        exports.clients.push(client);
    });
    socket.on("player:sync", (data) => {
        const player = data.player;
        const user = data.user;
        const client = getClient(socket);
        client.player = player;
        socket.emit("player:sync", listClients().filter((client) => client.user.id != user.id));
    });
};
exports.onConnection = onConnection;
