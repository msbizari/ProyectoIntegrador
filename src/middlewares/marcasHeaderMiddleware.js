const path = require('path')
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = require('../database/models/User');

marcasHeaderMiddleware = async function(req, res, next) {
	marcas = await db.Brand.findAll({
        include: [{association:"products"}],
    })
    res.locals.marcas = marcas
	next();
}

module.exports = marcasHeaderMiddleware;