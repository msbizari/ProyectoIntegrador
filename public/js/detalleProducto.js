window.onload = function (){
    document.querySelector(".boton-borrar-carrito").onclick = function (e) {
        localStorage.removeItem("producto")
        alert("vaciaste el carrito :( ")
    }
    
    document.querySelector(".boton-comprar").onclick = function (e) {
        e.preventDefault();
        let product = {
            id: Number(document.querySelector('.id-producto').innerText),
            name: document.querySelector('.nombre-producto').innerText,
            description: document.querySelector('.description-producto').innerText,
            price: Number(document.querySelector('.price-producto').innerText),
            discount: Number(document.querySelector('.discount-producto').innerText),
            size: document.querySelector('.size-producto').innerText,
            brand: document.querySelector('.brand-producto').innerText,
        };
       if(localStorage.getItem('producto')){
           let products = JSON.parse(localStorage.getItem("producto"));
           
           products.push(product)
           console.log(products)
           localStorage.setItem("producto",JSON.stringify(products))
        }else{
            let productArray = [product]
        localStorage.setItem("producto",JSON.stringify(productArray))
        }

        console.log(localStorage.producto)
        alert("se agregó este producto al carrito")
        /*carrito, abrir array (acordar de hacer json stringy para guardar y viceversa para leer el json)
        y meterle el producto*/

    };
};

/*en la pagina del carrito propiamente dicho: levantar el localstorage guardado y hacer un for each*/

//el local storage no se destruye automaticamente, hay que poner un boton para vaciar el carrito