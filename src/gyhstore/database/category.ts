import { PrismaClient } from "@prisma/client"
import { CategoryForm } from "../definitions/CategoryForm"

const prisma = new PrismaClient()

const include = { products: true }

const list = async () => await prisma.gyh_category.findMany({ include })

const create = async (data: CategoryForm, url: string) =>
    await prisma.gyh_category.create({
        data: {
            cover: url,
            name: data.name
        },
        include
    })

const update = async (id: number, data: CategoryForm, url?: string) =>
    await prisma.gyh_category.update({ where: { id }, data: { cover: url, name: data.name }, include })

const remove = async (id: number) => await prisma.gyh_category.delete({ where: { id } })

export default { include, list, create, update, remove }
