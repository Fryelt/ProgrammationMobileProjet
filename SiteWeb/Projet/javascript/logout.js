app.get('/logout', function (req, res){
	delete req.session.user_id;
	res.redirect('/');
});