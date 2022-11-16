const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.post('/', (request, response, next) => {    
	const data = request.body;
    const columns = ['title', 'description', 'category']
    const category_char = data.title.split(':')
    let category = ''

    if (category_char.length > 1) {
        columns.push('category')
        category = category_char[0].toLowerCase()
    }

	const mysql = newMysql(config.app.database);
	mysql.connect();

	
	mysql.query({
		sql: `INSERT INTO ${data.language} (title, description, category) VALUES (?) ;`,
		timeout: 40000, // 40s
		values: [
            [data.title, data.description, category || null]
        ]
	}, (error, results) => {
		if (error) console.error(error);
        console.log('enfiado')

        mysql.query({
            sql: `SELECT * FROM ${data.language} ;`,
            timeout: 40000,
        }, (error, results) => {
            if (error) console.error(error);

            console.log(results)
            response.json(results)
            mysql.end()
        })
	});


});

module.exports = router;