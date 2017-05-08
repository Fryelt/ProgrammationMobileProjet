var mysql = require("mysql");
var connection = mysql.createConnection({
host: 'localhost',
user:'root', password:'derp',
database: 'singles_square',
port: 3306
});
connection.query("select * from tblutilisateur",["MSFT"],
function(err, rows){
if(err){
console.log(err);
return;
}
rows.forEach(function(result){
console.log(result.nom, result.age);
})
});