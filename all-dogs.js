module.exports = () =>{
	const mysql = require('mysql');
	const connection = mysql.createConnection({
	  host : 'localhost',
	  user : 'root',
	  password : 'root',
	  database : 'dogs_app'
	});

	const allDogs = () => new Promise ((resolve, reject) => {
		connection.query('SELECT * FROM dogs', (err, rows, fields) => {
			return rows;
		});
	})

	connection.connect(() => {
		allDogs()
		.then(() => {
			connection.end();
		});
	})
}