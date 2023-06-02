import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const users = await prisma.users.findMany()
    response.json(users)
})

router.post("/", async (request: Request, response: Response) => {
    const data = request.body
    console.log(data)

    const user = await prisma.users.findFirst({
        where: { OR: [{ username: data.user }, { email: data.user }], AND: { password: data.password } },
    })

    response.json(user)
    console.log(user)
})

export default router