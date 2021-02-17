class Producto {
    constructor(name, price, year ){
        this.name = name;
        this.price = price;
        this.year = year;

    }
}

class UI {
    addproduct(producto){
        const productList = document.getElementById('Product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
           <div class="card-body">
              <strong>Producto</strong>:${producto.name} 
              <strong>Precio del Producto</strong>:${producto.price}
              <strong>Año del Producto</strong>:${producto.year}
 
           </div>

        </div>
        `
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