const express = require('express');
const path = require('path')
const fs = require('fs');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require('../database/models/Product');
const Category = require('../database/models/Category');
const Brand = require('../database/models/Brand');
const Products = db.Product;
const Categorys = db.Category;
const Brands = db.Brand;
const productsFilePath = path.join(__dirname, '../data/products.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const mainController= {
    index: async function(req,res) {

        let novedades = await db.Product.findAll({
            include:[{association:"category"},{association:"brand"}],
            /* nest : true, */
            where: {
            category_id: "1"
            }
            
        });
        let enOferta = await db.Product.findAll({
            include:[{association:"category"},{association:"brand"}],
            where: {
            category_id: "2"
            }
        });
        let marcaSeleccionada
        if (req.params.id){
        novedades = novedades.filter(producto => producto.brand.id == req.params.id)
        enOferta = enOferta.filter(producto => producto.brand.id == req.params.id)
        marcaSeleccionada = await db.Brand.findByPk(req.params.id)
        
        }
        res.render('index',{novedades:novedades , enOferta:enOferta, marcaSeleccionada:marcaSeleccionada})
    },
     
    carrito: (req, res) => { res.render ('carrito') },
    
    administrador: async (req,res) => {
        let allBrands = await db.Brand.findAll();
        let allCategories = await db.Category.findAll();

        res.render('users/administrador', {allBrands, allCategories})},
    //METODO PARA CREAR PRODUCTO
    store: async function (req, res) {
        let resultadoValidacion = validationResult(req)
        if (resultadoValidacion.errors.length >0) {
            let allBrands = await db.Brand.findAll();
            let allCategories = await db.Category.findAll();
            return res.render('users/administrador', {
                errors: resultadoValidacion.mapped(),
                oldData: req.body,
                allBrands: allBrands,
                allCategories: allCategories
            })
        }
		if (!req.file) {
			imagen = 'default-image.png'
		}else{
			imagen = req.file.filename
		};
        await db.Product.create({
                name:req.body.name,
                description: req.body.description,
                price: req.body.price,
                discount: req.body.discount,
                image:imagen,
                category_id: req.body.category_id,
                size:req.body.size,
                brand_id: req.body.brand_id,
        }); 
        res.redirect('/');
	},    
    edicionProductos: async function (req,res){
        let productToEdit = await db.Product.findByPk(req.params.id,{include:['brand', 'category']});
        let allBrands = await db.Brand.findAll();
        let allCategories = await db.Category.findAll();    
        //{let productToEdit = listaProductos.find(producto => producto.id == req.params.id);
        //res.render('edicionProductos', {productToEdit, toThousand})},
        res.render('edicionProductos', {productToEdit:productToEdit, allBrands, allCategories})},
    
    update: async function (req,res) {
        let resultadoValidacion = validationResult(req)
        if (resultadoValidacion.errors.length >0) {
            let allBrands = await db.Brand.findAll();
            let allCategories = await db.Category.findAll();
            let productToEdit = await db.Product.findByPk(req.params.id,{include:['brand', 'category']});
            return res.render('edicionProductos', {
                errors: resultadoValidacion.mapped(),
                productToEdit:productToEdit,
                allBrands,
                allCategories
            })
        }
        let productToEdit = await db.Product.findByPk(req.params.id,{include:['brand', 'category']});
        let image
        if(req.file != undefined){
            image = req.file.filename
        } else {
            image = productToEdit.image
        };
        
        await db.Product.update(
            {...req.body,
            image:image
            },

            {
                where: {id:req.params.id}
            }

        );
        //let id= req.params.id
        //let productToEdit = listaProductos.find(product => product.id == id);
        res.redirect('/');
    },  
    
    destroy:async function (req,res) {
        let product = await db.Product.findByPk(req.params.id,{include:['brand', 'category']});
        await product.destroy();
        res.redirect('/productos');
    },
    
    listadoProductos: async function(req,res) {
        let listaProductos = await db.Product.findAll();
        res.render('users/listadoProductos' , {listaProductos: listaProductos})
    },
    
    detalleDeproducto: async function(req,res) {
        let productoBuscado = await db.Product.findByPk(req.params.id,{include:['brand', 'category']});
        res.render('detalleDeproducto', {producto:productoBuscado});
    }
}

module.exports = mainController;

    
    
    /* --> VIEJO METEDO EDICION DE PRODUCTOS -->
    edicionProductos: (req,res) => 	{let productToEdit = listaProductos.find(producto => producto.id == req.params.id);
    res.render('edicionProductos', {productToEdit, toThousand})},
    update: (req,res) => {let id = req.params.id;
    let productToEdit = listaProductos.find(product => product.id == id)
    let image
    if(req.file != undefined){
        image = req.file.filename
    } else {
        image = productToEdit.image
    }
    productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image,
    };
    
    let nuevosProductos = listaProductos.map(product => {
        if (product.id == productToEdit.id) {
            return product = {...productToEdit};
        }
        return product;
    })
    fs.writeFileSync(productsFilePath, JSON.stringify(nuevosProductos, null, ' '));
    res.redirect('/');
},

     ANTIGUO, CUANDO SE CONECTABA AL JSON -->
    destroy: (req,res) =>{
		let id = req.params.id;
		let finalProducts = listaProductos.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
	},

    delete: async function (req,res) {
        let Product = await db.Movie.findByPk(req.params.id);
        res.render('moviesDelete',{Movie});
    }*/