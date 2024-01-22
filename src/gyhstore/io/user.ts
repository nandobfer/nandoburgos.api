import { Socket } from "socket.io"
import { LoginForm } from "../definitions/LoginForm"
import database from "../database"

const login = async (socket: Socket, data: LoginForm) => {
    try {
        const user = await database.user.login(data)
        socket.emit("gyh:login", user)
    } catch (error) {
        console.log(error)
    }
}

export default { login }
