window.onload = function(){
    let form = document.querySelector('.form-delete');
    form.addEventListener('submit', (e) => {
        let errors = [];

        let borrar = document.querySelector('#delete');
       
       
        if (borrar.value == '' ) {
            alert('Esta seguro que desea borrar este item');
            
        };

        if (errors.length > 0){
            e.preventDefault();
            
            let listaErrores = document.querySelector('.errors'); 
            listaErrores.innerHTML = '';  
            for(error of errors){
                listaErrores.innerHTML += '<li>' + error + '</li>'
            }
        }
    })
    }