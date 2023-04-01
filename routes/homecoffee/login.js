const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.post('/', async (request, response, next) => {    
	const data = request.body;
    data.user = data.user.toLowerCase()

    const user = await prisma.users.findFirst({
        where: {
            OR: [
                {username: data.user},
                {email: data.user},
            ],
            AND: {
                password: data.password
            }
        }
    })

    console.log(user)
    response.json(user)

});

module.exports = router;