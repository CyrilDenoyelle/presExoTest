module.exports = {
	f : (req, res) => {
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

		const addDog = () => new Promise ((resolve, reject) => {
			connection.query('INSERT INTO dogs (name, owner_id) VALUES (?, ?)', [name, ownerId], (err, result) => {
				if (err) throw err;
				resolve;
			})
			// connection.end();
		})

		connection.connect(
			()=>{
				addDog()
				.then(()=>{
				connection.query('SELECT * FROM dogs', (err, rows, fields) => {
					console.log(rows);
					res.send(rows)
				})
			});
		})
	}
}