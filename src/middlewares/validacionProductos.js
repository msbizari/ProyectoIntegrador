const {body} = require('express-validator');
const path = require('path')

const validacionProductos = [
    body('name').notEmpty().withMessage('Debe escribir el nombre del producto'),
    body('name').isLength({min:5}).withMessage('El nombre debe tener más de 5 caracteres'),
    body('description').isLength({min:20}).withMessage('La descripción debe tener más de 20 caracteres'),
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