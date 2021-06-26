const express = require('express');
const mainController = require('../controllersz/mainController');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const {body} = require('express-validator');
const validacionProductos = require('../middlewares/validacionProductos');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/carrito', mainController.carrito);


/*** GET ALL PRODUCTS ***/ 
router.get('/', mainController.listadoProductos); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', mainController.administrador); 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images/productos')
    }, 
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' +  Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage : storage, });

router.post('/', upload.single('myfile'), validacionProductos, mainController.store);


/*** GET ONE PRODUCT ***/ 
router.get('/:id/detalleDeproducto', mainController.detalleDeproducto); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', authMiddleware, mainController.edicionProductos); 
router.patch('/:id', upload.single('myfile'), validacionProductos, mainController.update); 


/*** DELETE ONE PRODUCT***/ 
router.post('/delete/:id', mainController.destroy); 
//router.post('/movies/delete/:id', moviesController.destroy




module.exports = router;