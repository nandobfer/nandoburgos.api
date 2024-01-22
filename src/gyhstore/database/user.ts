import { PrismaClient } from "@prisma/client"
import { LoginForm } from "../definitions/LoginForm"

const prisma = new PrismaClient()

const include = {}

const login = async (data: LoginForm) =>
    await prisma.gyh_user.findFirst({
        where: { OR: [{ email: data.login }, { username: data.login }], AND: { password: data.password } }
    })

export default { login }
