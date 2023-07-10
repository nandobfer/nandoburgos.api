"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUi = void 0;
const roomsList = [];
let last_id = 1;
const handleUi = (socket, clients) => {
    const convertRoom = (room) => (Object.assign(Object.assign({}, room), { clients: room.clients.map((client) => clients.convert(clients.get(client))) }));
    const rooms = {
        list: () => {
            return roomsList.map((room) => convertRoom(room));
        },
        convert: (room) => convertRoom(room),
    };
    socket.on("rooms", (data) => {
        console.log(data);
        clients.add({
            connection: socket,
            player: data.player,
            user: data.user,
        });
        socket.emit("rooms", rooms.list());
    });
    socket.on("room:new", (data) => {
        const client = clients.get(socket);
        last_id += 1;
        const room = {
            id: last_id,
            name: data.name,
            clients: [client],
        };
        roomsList.push(room);
        // socket.emit("room:new:complete", rooms.convert(room))
        // socket.broadcast.emit("room:new", rooms.convert(room))
    });
};
exports.handleUi = handleUi;
