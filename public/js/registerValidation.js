window.onload = function(){
    
    let form = document.querySelector('.form-register');
    form.addEventListener('submit', (e) => {
        let errors = [];

        let name = document.querySelector('#name');
        let lastName = document.querySelector('#lastName');
        let email = document.querySelector('#email');
        let image = document.querySelector('#myfile')
        //let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        let password = document.querySelector('#password');
        //let image = document.querySelector('#myfile');
        //let fileExtensions = document.querySelector('#myfile').value;
        //let acceptedExtensions = [".jpg", ".png" , ".gif"];
        
        if (name.value == '' || name.value.length < 2 ) {
            errors.push('El campo Nombre no puede estar vacío, debe contener al menos 2 carácteres');
            name.classList.add('is-invalid')
        };

        if (lastName.value == '' || lastName.value.length < 2 ) {
            errors.push('El campo Apellido no puede estar vacío, debe contener al menos 2 carácteres');
            lastName.classList.add('is-invalid');
        }

        if (email.value == '') {
            errors.push('El campo email no puede estar vacío');
            email.classList.add('is-invalid');
        } else if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email.value))
            {
        } else {
            errors.push('Debe ingresar un email valido');
            email.classList.add('is-invalid')
        };

        if (password.value == '') {
            errors.push('El campo Password no puede estar vacío');
            password.classList.add('is-invalid');
        } else if (password.value.length < 5 || password.value.length > 10) {
            errors.push('El campo password debe ser entre 5 y 10 caracteres');
            password.classList.add('is-invalid');
        };

        let acceptedExtensions = ["jpg", "png" , "gif"];
        if(image.value != ""){
            let fileExtension =  image.value.split('.').pop() /* image.value.slice((image.value.lastIndexOf(".") - 1 >>> 0) + 2); */;

            if(!acceptedExtensions.includes(fileExtension)){
                errors.push("Las extensiones aceptadas son "+ acceptedExtensions.join(", "));
            }
        };

        if (errors.length > 0){
            e.preventDefault();

            let listaErrores = document.querySelector(".errors"); 
            listaErrores.innerHTML = "";  
            for(error of errors){
                listaErrores.innerHTML += "<li>" + error + "</li>"
            }
        }
    })
    } 