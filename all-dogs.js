module.exports = () =>{
	let mysql = require('mysql');
	let connection = mysql.createConnection({
	  host : 'localhost',
	  user : 'root',
	  password : 'root',
	  database : 'dogs_app'
	});

	const allDogs = () => {
		connection.query('SELECT * FROM dogs', function(err, rows, fields) {
			return rows;
		});
	}

	connection.connect(function(){
		allDogs();
		connection.end();
	})
}