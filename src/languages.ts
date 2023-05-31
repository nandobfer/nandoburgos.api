import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const languages = await prisma.languages.findMany({ include: { sheets: true } })
    response.json(languages)
})

export default router
