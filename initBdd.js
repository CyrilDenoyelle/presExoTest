module.exports = {
	initBdd: ()=>{
		let mysql = require('mysql');
		let connection = mysql.createConnection({
		  host : 'localhost',
		  user : 'root',
		  password : 'root',
		  database : 'dogs_app'
		});

		const dogsTableInit = () => new Promise ((resolve, reject) => {
			connection.query('SELECT * FROM dogs', function(err, rows, fields) {
				if (err) console.log(rows);
				if(rows == undefined){
					connection.query('CREATE TABLE dogs(id int primary key AUTO_INCREMENT, name varchar(255), owner_id int) CHARSET=utf8', function(err, result) {
						if (err) throw err
						console.log(rows);
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

