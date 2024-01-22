import { Socket } from "socket.io"
import database from "../database"
import { CategoryForm } from "../definitions/CategoryForm"
import { saveImage } from "../../tools/saveImage"

const list = async (socket: Socket) => {
    try {
        const categories = await database.category.list()
        socket.emit("gyh:category:list", categories)
    } catch (error) {
        console.log(error)
    }
}

const create = async (socket: Socket, data: CategoryForm) => {
    try {
        saveImage(`categories`, data.cover.file, data.cover.name)
        const cover = `categories/${data.cover.name}`
        const category = await database.category.create(data, cover)
        socket.emit("gyh:category:new:success", category)
        socket.broadcast.emit("gyh:category:update", category)
    } catch (error) {
        console.log(error)
        socket.emit("gyh:category:new:error", error?.toString())
    }
}

const update = async (socket: Socket, data: CategoryForm, id: number) => {
    try {
        let cover: string | undefined = undefined
        if (data.cover.file) {
            saveImage(`categories`, data.cover.file, data.cover.name)
            cover = `categories/${data.cover.name}`
        }

        const category = await database.category.update(id, data, cover)
        socket.emit("gyh:category:update:success", category)
        socket.broadcast.emit("gyh:category:update", category)
    } catch (error) {
        console.log(error)
        socket.emit("gyh:category:update:error", error?.toString())
    }
}

const remove = async (socket: Socket, id: number) => {
    try {
        const category = await database.category.remove(id)
        socket.emit("gyh:category:delete:success", category)
        socket.broadcast.emit("gyh:category:delete", category)
    } catch (error) {
        console.log(error)
        socket.emit("gyh:category:delete:error", error?.toString())
    }
}

export default { list, create, update, remove }
