app.post('/login', function (req, res){
	var post = req.body;
	if (post.user === && post.password === ){
		req.session.user_id == 'id';
		res.redirect('../pages/erreur');
	} else {
		res.send('Bad user/pass');
	}
})