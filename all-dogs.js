module.exports = () =>{
	let connection = require('./connectBdd')();

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