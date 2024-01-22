import { Socket } from "socket.io"
import { saveImage } from "../../tools/saveImage"
import database from "../database"
import { ProductForm } from "../definitions/ProductForm"

const create = async (socket: Socket, data: ProductForm) => {
    console.log(data)
    try {
        let urls: string[] = []
        let cover: string | undefined = undefined

        if (data.cover.file) {
            saveImage(`products/cover`, data.cover.file, data.cover.name)
            cover = `products/cover/${data.cover.name}`
        }

        const uploaded = data.images?.map((file) => {
            saveImage(`products`, file.file, file.name)
            return `products/${file.name}`
        })

        if (uploaded) {
            urls = [...uploaded]
        }

        data.urls?.map((url) => urls.push(url))

        console.log({ urls })
        const product = await database.product.create(data, urls, cover)
        socket.emit("gyh:product:create", product)
        socket.broadcast.emit("gyh:product:update", product)
    } catch (error) {
        console.log(error)
    }
}

const update = async (socket: Socket, data: ProductForm, id: number) => {
    console.log(data)
    try {
        let urls: string[] = []
        let cover: string | undefined = undefined

        if (data.cover.file) {
            saveImage(`products/cover`, data.cover.file, data.cover.name)
            cover = `products/cover/${data.cover.name}`
        }

        const uploaded = data.images?.map((file) => {
            saveImage(`products`, file.file, file.name)
            return `products/${file.name}`
        })

        if (uploaded) {
            urls = [...uploaded]
        }

        data.urls?.map((url) => urls.push(url))

        console.log({ urls })
        const product = await database.product.update(id, data, urls, cover)
        socket.emit("gyh:product:update:success", product)
        socket.broadcast.emit("gyh:product:update", product)
    } catch (error) {
        console.log(error)
    }
}

const list = async (socket: Socket) => {
    const products = await database.product.list()
    socket.emit("gyh:product:list", products)
}

const remove = async (socket: Socket, id: number) => {
    try {
        const deleted = await database.product.remove(id)
        if (deleted) {
            socket.emit("gyh:product:delete:success", deleted)
            socket.broadcast.emit("gyh:product:delete", deleted)
        }
    } catch (error) {
        console.log(error)
    }
}

export default { create, list, remove, update }
