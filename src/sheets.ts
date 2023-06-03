import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const sheets = await prisma.sheets.findMany({ include: { language: true, user: true } })
    response.json(sheets)
})

router.post("/add", async (request: Request, response: Response) => {
    const data = request.body

    const sheet = await prisma.sheets.create({
        data: {
            title: data.title,
            code: data.code,
            keywords: data.keywords,
            language_id: data.language,
            user_id: data.user_id,
        },
        include: { language: true, user: true },
    })

    response.json(sheet)
})

router.post("/update", async (request: Request, response: Response) => {
    const data = request.body

    const sheet = await prisma.sheets.update({
        where: { id: data.id },
        data: {
            title: data.title,
            code: data.code,
            keywords: data.keywords,
            language_id: data.language,
        },
        include: { language: true, user: true },
    })

    response.json(sheet)
})

router.post("/delete", async (request: Request, response: Response) => {
    const data = request.body

    const sheet = await prisma.sheets.delete({ where: { id: data.id } })
    response.json(sheet)
})

export default router
