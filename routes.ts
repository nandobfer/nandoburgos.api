import express, { Express, Request, Response } from "express"
import languages from "./src/languages"
import sheets from "./src/sheets"

export const router = express.Router()

router.get("/", async (request: Request, response: Response) => {
    response.json({ success: true })
})

router.use("/languages", languages)
router.use("/sheets", sheets)
