module.exports = {
	initBdd: ()=>{
		let connection = require('./connectBdd')();

		const dogsTableInit = () => new Promise ((resolve, reject) => {
			connection.query('SELECT * FROM dogs', function(err, rows, fields) {
				if (err) console.log(err);
				if(rows == undefined){
					connection.query('CREATE TABLE dogs(id int primary key AUTO_INCREMENT, name varchar(255), owner_id int) CHARSET=utf8', function(err, result) {
						if (err) throw err;
						resolve;
					});
				}else{
					console.log(rows)
					resolve;
				}
			})
		})
		connection.connect(function(){
			dogsTableInit()
			.then(()=>{
				console.log(rows);
				connection.end();
			});
		})
	}
}

