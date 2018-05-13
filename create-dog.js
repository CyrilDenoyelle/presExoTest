module.exports = (req, res) => {
	let connection = require('./connectBdd')();

	let name = req.query.name;
	let ownerId = req.query.ownerId;

	const addDog = () => new Promise ((resolve, reject) => {
		connection.query('INSERT INTO dogs (name, owner_id) VALUES (?, ?)', [name, ownerId], (err, result) => {
			if (err) throw err;
			resolve;
		})
	})

	connection.connect(
		()=>{
			addDog()
			.then(()=>{
				connection.end();
			});
		}
	)
}