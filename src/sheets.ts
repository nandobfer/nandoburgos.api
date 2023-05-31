import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const sheets = await prisma.sheets.findMany({ include: { language: true } })
    response.json(sheets)
})

export default router
