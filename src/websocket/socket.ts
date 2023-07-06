import { WebSocketServer, WebSocket } from "ws"
import { users } from "@prisma/client"

export let clients: Client[] = []

export const wsServer = new WebSocketServer({ noServer: true })

const getClient = (id: number) => {
    const client = clients.filter((item) => item.user.id == id)[0]
    return client
}

const syncPlayers = (client: Client) => {
    const data = clients.filter((item) => item.player).filter((item) => item.user.id != client.user.id)
    client.connection.send(JSON.stringify({ syncPlayers: { clients: data } }))
}

const registerNewPlayer = (client: Client, player: any) => {
    client.player = player
    console.log({ player })
    // console.log({ client })
}

wsServer.on("connection", (connection) => {
    console.log("new connection")
    connection.on("message", (message) => {
        const data = JSON.parse(message.toString())
        // Object.entries(data).map(([key, value]) => console.log({ websocket: key }))

        if (data.connect) {
            const filtered_clients = clients.filter((client) => client.user.id == data.connect.user.id)

            if (filtered_clients.length > 0) {
                clients = clients.filter((client) => client.user.id != data.connect.user.id)
            }

            const client: Client = { user: data.connect.user, connection, player: data.connect.player }
            clients.push(client)
            client.connection.send(JSON.stringify({ connected: true }))
            registerNewPlayer(client, data.connect.player)
            syncPlayers(client)
        }

        if (data.syncPlayers) {
            const client = getClient(data.syncPlayers.player.id)
            client.player = data.syncPlayers.player
            syncPlayers(client)
        }
    })
})
