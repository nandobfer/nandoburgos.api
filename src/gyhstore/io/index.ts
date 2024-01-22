import { Socket } from "socket.io"
import user from "./user"
import { LoginForm } from "../definitions/LoginForm"
import { ProductForm } from "../definitions/ProductForm"
import product from "./product"
import category from "./category"
import { CategoryForm } from "../definitions/CategoryForm"

const handle = (socket: Socket) => {
    console.log()

    socket.on("gyh:login", (data: LoginForm) => user.login(socket, data))

    socket.on("gyh:product:create", (data: ProductForm) => product.create(socket, data))
    socket.on("gyh:product:list", () => product.list(socket))
    socket.on("gyh:product:update", (data: ProductForm, id: number) => product.update(socket, data, id))
    socket.on("gyh:product:delete", (id: number) => product.remove(socket, id))

    socket.on("gyh:category:list", () => category.list(socket))
    socket.on("gyh:category:new", (data: CategoryForm) => category.create(socket, data))
    socket.on("gyh:category:update", (data: CategoryForm, id: number) => category.update(socket, data, id))
    socket.on("gyh:category:delete", (id: number) => category.remove(socket, id))
}

export default { handle, user }
