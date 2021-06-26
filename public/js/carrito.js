window.onload = function (){
    document.querySelector(".borrar-carrito").onclick = function (e) {
        localStorage.removeItem("producto")
        console.log(localStorage.producto)

        document.querySelector(".table").style.display = 'none'
        document.querySelector(".monto-total").style.display = 'none'
    }
    let carrito = document.querySelector(".table")

    if(localStorage.getItem('producto') !== null) {
        let productos = JSON.parse(localStorage.getItem("producto"))
        console.log(productos)
        productos.forEach(producto => {
            const row = document.createElement("div");
            row.setAttribute("class","row");
            
            const name = document.createElement("div");
            name.setAttribute("class","cell");
            name.setAttribute("data-title","Nombre");
            name.textContent = producto.name

            const price = document.createElement("div");
            price.setAttribute("class","cell");
            price.setAttribute("data-title","Precio");
            price.textContent = `$ ${producto.price}`

            const discount = document.createElement("div");
            discount.setAttribute("class","cell");
            discount.setAttribute("data-title","Descuento");
            discount.textContent = `%${producto.discount}`

            const size = document.createElement("div");
            size.setAttribute("class","cell");
            size.setAttribute("data-title","Tamaño");
            size.textContent = producto.size

            const brand = document.createElement("div");
            brand.setAttribute("class","cell");
            brand.setAttribute("data-title","Marca");
            brand.textContent = producto.brand;

            carrito.appendChild(row)
            row.appendChild(name)
            row.appendChild(price)
            row.appendChild(discount)
            row.appendChild(size)
            row.appendChild(brand)
        });
        let montoTotal = 0;
        for (let i = 0; i < productos.length; i++) {
            montoTotal = montoTotal + productos[i].price;
        }
        let Total = document.querySelector(".monto-total");
        const montoTot = document.createElement("span");
        montoTot.textContent = montoTotal
        Total.appendChild(montoTot)
        
    }else{
        let wrapper = document.querySelector(".wrapper");
        const noProducts = document.createElement("h2");
        noProducts.textContent = "No tienes productos en tu carrito";
        wrapper.appendChild(noProducts)
        /* wrapper.appendChild(document.createElement("br")) */
    }


       /*  e.preventDefault();
        let product = {
            id: document.querySelector('.id-producto').innerText,
            name: document.querySelector('.nombre-producto').innerText,
            description: document.querySelector('.description-producto').innerText,
            price: Number(document.querySelector('.price-producto').innerText),
            discount: Number(document.querySelector('.discount-producto').innerText),
            size: document.querySelector('.size-producto').innerText,
            brand: document.querySelector('.brand-producto').innerText,
        }
        localStorage.setItem("producto",JSON.stringify(product))
        alert("se agregó este producto al carrito") */

        /*carrito, abrir array (acordar de hacer json stringy para guardar y viceversa para leer el json)
        y meterle el producto*/

};