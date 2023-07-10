"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGame = void 0;
const handleGame = (socket, clients) => {
    socket.on("player:new", (data) => {
        const player = data.player;
        const user = data.user;
        const client = {
            connection: socket,
            player,
            user,
        };
        socket.broadcast.emit("player:new", { player, user });
        socket.emit("players", clients.list());
        clients.add(client);
    });
    socket.on("player:sync", (data) => {
        const player = data.player;
        const user = data.user;
        const client = clients.get(socket);
        client.player = player;
        socket.emit("player:sync", clients.list().filter((client) => client.user.id != user.id));
    });
};
exports.handleGame = handleGame;
