const path = require('path')
const fs = require('fs');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const listaUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = require('../database/models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	if(req.cookies.userEmail) {
    db.User.findOne({where: {email: req.cookies.userEmail}})
	.then(userFromCookie => {
		req.session.userLogged = userFromCookie;
	})}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}
	 
	next();
}

module.exports = userLoggedMiddleware;