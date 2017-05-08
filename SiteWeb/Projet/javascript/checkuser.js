app.get('/page_here', checkAuth, function (req, res){
	res.send('Vous êtes connectés');
});