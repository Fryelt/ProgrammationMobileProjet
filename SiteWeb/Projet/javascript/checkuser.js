app.get('/page_here', checkAuth, function (req, res){
	res.send('Vous �tes connect�s');
});