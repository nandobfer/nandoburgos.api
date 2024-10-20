import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./routes"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import http from "http"
import { getIoInstance, handleSocket, initializeIoServer } from "./src/io"

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(
    cors({
        origin: "*", // Allows all origins
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"], // Allows all common methods
        allowedHeaders: ["Content-Type", "Authorization", "Origin", "x-access-token", "XSRF-TOKEN"], // Allows all headers listed
        credentials: true, // Allows credentials
    })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/", router)
app.use("/static", express.static("static"))

const server = http.createServer(app)
initializeIoServer(server)
const io = getIoInstance()

io.on("connection", (socket) => {
    // onConnection(socket)
    handleSocket(socket)
})

server.listen(port, () => {
    console.log(`[server]: Server is running at http ${port}`)
})
