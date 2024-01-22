import { PrismaClient } from "@prisma/client"
import { ProductForm } from "../definitions/ProductForm"

const prisma = new PrismaClient()

const include = { images: true, categories: true }

const list = async () => await prisma.gyh_product.findMany({ include })

const create = async (data: ProductForm, urls: string[], cover?: string) =>
    await prisma.gyh_product.create({
        data: {
            name: data.name,
            code: data.code,
            price: data.price,
            description: data.description,
            cover,

            images: { create: urls.map((url) => ({ url })) },
            categories: { connect: data.categories.map((id) => ({ id })) }
        },
        include
    })

const update = async (id: number, data: ProductForm, urls: string[], cover?: string) => {
    await prisma.gyh_image.deleteMany({ where: { product_id: id } })
    return await prisma.gyh_product.update({
        where: { id },
        data: {
            code: data.code,
            description: data.description,
            name: data.name,
            price: data.price,
            cover,

            images: { create: urls.map((url) => ({ url })) },
            categories: { set: [], connect: data.categories.map((id) => ({ id })) }
        },
        include
    })
}

const remove = async (id: number) => await prisma.gyh_product.delete({ where: { id } })

export default { create, list, remove, update }
