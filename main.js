class Producto {
    constructor(name, price, year ){
        this.name = name;
        this.price = price;
        this.year = year;

    }
}

class UI {
    addproduct(producto){


    }
    deleteProduct(){

    }
    showMassage(){

    }
}


// Eventos del DOM
document.getElementById('productos-form')
    .addEventListener('submit', function(e){
     const name = document.getElementById('name').value;
     const price = document.getElementById('price').value;
     const year = document.getElementById('year').value;

    const producto = new Producto(name, price , year);



    e.preventDefault();
});