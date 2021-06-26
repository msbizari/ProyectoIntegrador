const {body} = require('express-validator');
const path = require('path')

const validacionProductos = [
    body('name').notEmpty().withMessage('Debe escribir un nombre'),
    body('name').isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('lastName').notEmpty().withMessage('Debe escribir un apellido'),
    body('lastName').isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Debe escribir un email'),
    body('email').isEmail().withMessage('Debe escribir un email'),
    body('password').notEmpty().withMessage('Debe escribir un password'),
    body('password').isLength({min:8}).withMessage('El password debe tener al menos 8 caracteres'),
    body("myfile").custom((value,{req})=>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png" , ".gif"];
        /* if(file){
          throw new Error("Tienes que subir una imagen");
        }else{ */
          if(file != null){
          let fileExtensions=path.extname(file.originalname);
          if(!acceptedExtensions.includes(fileExtensions)){
            throw new Error("Las extensiones aceptadas son "+ acceptedExtensions.join(","));
    
          }
        }
        return true
      }),
  
]

module.exports = validacionProductos;