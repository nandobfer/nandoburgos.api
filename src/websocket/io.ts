import { users } from "@prisma/client"
import { Socket } from "socket.io"

export let clients: Client[] = []

const getClient = (socket: Socket) => {
    const client = clients.filter((client) => client.connection == socket)[0]
    return client
}

const listClients = () => {
    return clients.map((client) => ({ player: client.player, user: client.user }))
}

export const onConnection = (socket: Socket) => {
    console.log("new io connection")

    // there is no handling in client yet
    socket.on("disconnect", () => {
        const client = getClient(socket)
        console.log(`${client.user.name} disconnected`)

        clients = clients.filter((client) => client.connection != socket)

        socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user })
    })

    socket.on("player:new", (data) => {
        const player: Player = data.player
        const user: users = data.user

        const client: Client = {
            connection: socket,
            player,
            user,
        }

        socket.broadcast.emit("player:new", { player, user })
        socket.emit("players", listClients())

        clients.push(client)
    })

    socket.on("player:sync", (data) => {
        const player: Player = data.player

        const client = getClient(socket)
        client.player = player
        socket.emit(
            "player:sync",
            listClients().filter((client) => client.player.id != player.id)
        )
    })
}
