window.onload = function(){
    let form = document.querySelector('.create-form');
    form.addEventListener('submit', (e) => {
        let errors = [];

        let email = document.querySelector('#email');
        //let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        let password = document.querySelector('#password');
       
    
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
        }else if (password.value.length < 5 || password.value.length > 10) {
            errors.push('El campo password debe ser entre 5 y 10 caracteres');
            password.classList.add('is-invalid');
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