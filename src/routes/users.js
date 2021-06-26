const express = require('express');
const mainController = require('../controllersz/mainController');
const userController = require('../controllersz/userController');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validacionUserRegister = require('../middlewares/validacionUserRegister');

//Formulario de Login 
router.get('/login', guestMiddleware, userController.login);

//Formulario de Registro
router.get('/register', guestMiddleware, userController.register);

//MULTER PARA USUARIOS:
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/usuarios')
    }, 
    filename: function(req, file, cb){
        cb(null, Date.now() + '-'+ file.originalname)
    }
});

const upload = multer({ storage : storage });


router.post('/', upload.single('myfile'), validacionUserRegister, userController.storeUser);

//solo para autorizados
router.get('/administrador', authMiddleware, mainController.administrador); //quedó ligado al mainController

//solo para autorizados - edicion de productos
//router.get('/edicionProductos', authMiddleware, mainController.edicionProductos);

//PARA HACER LOGINPROCESS DE LOS USARIOS//
const validacionLogin = [
    body('email').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').isEmail().withMessage('Debe escribir un email válido'),
    body('password').notEmpty().withMessage('Este campo es obligatorio')]

//EL RESTO DE LAS VALIDACIONES ESTA EN EL CONTROLADOR
router.post('/login', validacionLogin, userController.loginProcess);

// PERFIL DE USUARIO:
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout', userController.logout);


module.exports = router;
