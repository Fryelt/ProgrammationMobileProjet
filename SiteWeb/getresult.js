var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");
var mysql = require("mysql");
var passport = require("passport"),
LocalStrategy = require("passport-local").Strategy;
var app = express();

app.use(express.static(__dirname + '/Projet'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, resp){
	resp.sendFile('index.html', {root: path.join(__dirname, './Projet')})
})

app.post('/Submit', function(req, res) {

console.log('req.body');
console.log(req.body);
res.redirect('/');
res.end();

var connection = mysql.createConnection({
host: 'localhost',
user:'root', password:'derp',
database: 'singles_square',
port: 3306
});

connection.query("Insert into tblutilisateur (nom, age, sexe, adresse, passe) VALUES ('"+req.body.nom+"',"+req.body.age+",'"+req.body.sexe+"','"+req.body.email+"','"+req.body.mdp+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
});
});

passport.use(new LocalStrategy(
	function(username, password, done){
		User.findOne({ username: username}, function(err, user){
			if (err) {return done(err);}
			if (!user){
				return done(null, false, { message: 'Utilisateur non-valide.'});
			}
			if (!user.validPassword(password)){
				return done(null, false, { message: 'Mot de passe incorrect.'});
			}
			return done(null, user);
		});
	}
));

app.post('/login', 
passport.authenticate('local',
{ successRedirect: '/', 
failureRedirect: '/login',
failureFlash: true })
);

var server= app.listen(3000, function (){
	
	var host = server.address().address
	var port = server.address().port
	
	console.log('Website at port : ',port)
});