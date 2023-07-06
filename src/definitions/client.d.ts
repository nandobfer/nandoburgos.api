declare interface Client {
    user: users
    connection: WebSocket | Socket
    player: Player
}
