import { users } from "@prisma/client"
import { Socket } from "socket.io"

export const handleGame = (socket: Socket, clients: ClientListBag) => {
    socket.on("player:new", (data) => {
        const player: Player = data.player
        const user: users = data.user

        const client: Client = {
            connection: socket,
            player,
            user,
        }

        socket.broadcast.emit("player:new", { player, user })
        socket.emit("players", clients.list())

        clients.add(client)
    })

    socket.on("player:sync", (data) => {
        const player: Player = data.player
        const user: users = data.user

        const client = clients.get(socket)
        client.player = player
        socket.emit(
            "player:sync",
            clients.list().filter((client) => client.user.id != user.id)
        )
    })
}
