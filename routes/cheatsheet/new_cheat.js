const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.post('/', (request, response, next) => {    
	const data = request.body;

	const mysql = newMysql(config.app.database);
	mysql.connect();
	
	mysql.query({
		sql: `INSERT INTO ${data.language} (title, description) VALUES (?) ;`,
		timeout: 40000, // 40s
		values: [
            [data.title, data.description]
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