declare interface GameRoom {
    id: number
    name: string
    clients: GameClient[]
}

declare interface Room extends GameRoom {
    clients: Client[]
}
