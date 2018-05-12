module.exports = {
	connectBdd: ()=>{
		let mysql = require('mysql');
		let connection = mysql.createConnection({
		  host : 'localhost',
		  user : 'root',
		  password : 'root',
		  database : 'dogs_app'
		});

		const dogsTableInit = () => {
			connection.query('SELECT * FROM dogs', function(err, rows, fields) {
				if (err) console.log(rows);
				if(rows == undefined){
					connection.query('CREATE TABLE dogs(id int primary key AUTO_INCREMENT, name varchar(255), owner_id int) CHARSET=utf8', function(err, result) {
						if (err) throw err
							console.log(rows);
					});
				}else{
					console.log(rows)
				}
			});
		}
		connection.connect(function(){
			dogsTableInit();
			connection.end();
		})
	}
}

