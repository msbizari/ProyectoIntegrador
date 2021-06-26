const express = require('express');
const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs')
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require('../../database/models/Product');
const Category = require('../../database/models/Category');
const Brand = require('../../database/models/Brand');

const mainApiController= {
    'list': async function(req, res) {
        let products = await db.Product.findAll({
            include: [{association:"category"},{association:"brand"}]
        })
        let brands = await db.Brand.findAll({
            include: [{association:"products"}]
        })
            countByCategory = brands;
            for (let i = 0 ; i < countByCategory.length ; i++) {
                countByCategory[i].dataValues.count = countByCategory[i].products.length;
                delete countByCategory[i].dataValues.products
                    }
                   
            for (let i = 0 ; i < products.length ; i++) {
                products[i].dataValues.url = "http://localhost:3000/api/productos/"+products[i].id;
                delete products[i].dataValues.price
                delete products[i].dataValues.image
                delete products[i].dataValues.category_id
                delete products[i].dataValues.size
                delete products[i].dataValues.discount
                delete products[i].dataValues.brand_id
                delete products[i].dataValues.category
            }
            
            let respuesta = {
                meta: {
                    status : 200,
                    url: 'http://localhost:3000/api/productos'
                },
                data: {
                    count: products.length,
                    countByCategory : countByCategory,
                    products : products
                }
            }
            res.json(respuesta);
    },
    'detail': function (req, res) {
        db.Product.findByPk(req.params.id,
            {
                include : [{association:"category"},{association:"brand"}]
            })
        .then(product => {
            product.dataValues.url_image = "http://localhost:3000/api/productos/image/"+product.id;
            let respuesta = {
                meta: {
                    status: 200,
                    url: 'http://localhost:3000/api/productos/'+product.id
                },
                data: product
                }
                res.json(respuesta);
            })
            .catch(error =>{error.TypeError = 'No se encuentra producto con ese id';
            res.send(error)
            })
    },
    'sendImage': async function(req, res) {
        let product = await db.Product.findByPk(req.params.id)
        imagen = path.join(__dirname, '../../../public/images/productos/',product.image)
        res.sendFile(imagen)
    }
}   

module.exports = mainApiController;