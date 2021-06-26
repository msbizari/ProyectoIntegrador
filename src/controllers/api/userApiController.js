const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const User = require('../../database/models/User');

const userApiController= {
    'list': async function(req, res) {
        let usuarios = await db.User.findAll()
            for (let i = 0 ; i < usuarios.length ; i++) {
                delete usuarios[i].dataValues.birthDate
                delete usuarios[i].dataValues.adress
                delete usuarios[i].dataValues.password
                delete usuarios[i].dataValues.passwordConfirme
                delete usuarios[i].dataValues.newsletter
                delete usuarios[i].dataValues.image
                usuarios[i].dataValues.url = "http://localhost:3000/api/users/"+usuarios[i].id;
            }
            console.log(usuarios)
            let respuesta = {
                meta: {
                    status : 200,
                    url: 'http://localhost:3000/api/users'
                },
                data: {
                    count: usuarios.length,
                    usuarios : usuarios
                }
            }
            res.json(respuesta);
    },
    'detail': function (req, res) {
        db.User.findByPk(req.params.id)
        .then(usuario => {
            usuario.dataValues.url_image = "http://localhost:3000/api/users/image/"+usuario.id;
            console.log(usuario)
            delete usuario.dataValues.password;
            delete usuario.dataValues.passwordConfirme;

            let respuesta = {
                meta: {
                    status: 200,
                    url: 'http://localhost:3000/api/users/'+usuario.id
                },
                data: usuario
                }
                res.json(respuesta)
        })
        .catch(error =>{error.TypeError = 'No se encuentra usuario con ese id';
        res.send(error)
        })
        //ALTERNATIVA CON async / await, PERO NO SUPE COMO AGARRAR EL ERROR:

        /* async function(req, res) {
            let usuario = await db.User.findByPk(req.params.id)
            usuario.dataValues.url_image = "http://localhost:3000/api/users/image/"+usuario.id;
            console.log(usuario)
            delete usuario.dataValues.password;
            delete usuario.dataValues.passwordConfirme;

            let respuesta = {
                meta: {
                    status: 200,
                    url: 'http://localhost:3000/api/users/'+usuario.id
                },
                data: usuario
                }
                res.json(respuesta);
        }, */
    },
    'sendImage': async function(req, res) {
        let usuario = await db.User.findByPk(req.params.id)
        imagen = path.join(__dirname, '../../../public/images/usuarios/',usuario.image)
        res.sendFile(imagen)
    }
}

module.exports = userApiController;