module.exports = {
	f : (req, res) =>{
		console.log(req.query)
		let mysql = require('mysql');
		let connection = mysql.createConnection({
		  host : 'localhost',
		  user : 'root',
		  password : 'root',
		  database : 'dogs_app'
		});

		let name = req.query.name;
		let ownerId = req.query.ownerId;

		connection.connect(function(){
			connection.query('INSERT INTO dogs (name, owner_id) VALUES (?, ?)', [name, ownerId], (err, result) => {
				if (err) throw err;
			}.then(connection.query('SELECT * FROM dogs', function(err, rows, fields) {
					console.log(rows);
				});
			))
			connection.end();
		})
	}
}