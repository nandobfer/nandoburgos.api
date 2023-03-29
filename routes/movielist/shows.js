const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.get('/', (request, response, next) => {    
	// const data = request.body;

	const mysql = newMysql(config.movielist.database);
	mysql.connect();
	
	mysql.query({
		sql: `SELECT * FROM movielist order by watched DESC ;`,
		timeout: 40000, // 40s
		values: [
        ]
	}, (error, results) => {
		if (error) console.error(error);
        console.log(results)
        response.json(results)
        mysql.end()
	});


});

module.exports = router;