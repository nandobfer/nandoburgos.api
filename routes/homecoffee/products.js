const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/', async (request, response) => {
    const products = await prisma.products.findMany()
    console.log(products)
    response.json(products)

})

router.post('/', async (request, response, next) => {    
	const data = request.body;

    const user = await prisma.users.findFirst({
        where: {
            OR: [
                {username: data.user},
                {email: data.user},
            ],
            AND: { password: data.password }
        }
    })

    console.log(user)
    response.json(user)

});

router.post('/new', async (request, response, next) => {    
    const data = request.body

    const new_product = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d]+/g, '')),
            category: data.category
        }
    })

    response.json(new_product)
})

router.post('/delete', async (request, response, next) => {    
    const data = request.body

    const deletion = await prisma.products.delete({ where: { id: data.id } })

    response.json(deletion)

})

router.post('/update', async (request, response, next) => {    
    const data = request.body

    const product = await prisma.products.update({
        data: {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price.replace(/[^\d]+/g, '')),
            category: data.category
        },
        where: { id: data.id }
    })

    response.json(product)
})

module.exports = router;