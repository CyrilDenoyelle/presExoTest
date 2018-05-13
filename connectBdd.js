module.exports = () => {
	const mysql = require('mysql');
	return mysql.createConnection({
		  host : 'localhost',
		  user : 'root',
		  password : 'root',
		  database : 'dogs_app'
		});
}