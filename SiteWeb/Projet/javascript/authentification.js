function checkAuth(req, res, next){
	if (!req.session.user_id){
		res.send('Aucune autorisation donnée');
	} else{
		next();
	}
}