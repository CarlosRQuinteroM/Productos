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
              <strong>Producto</strong>: ${producto.name}
              <strong>Precio del Producto</strong>: ${producto.price}
              <strong>Año del Producto</strong>: ${producto.year}
              <a href="#" onClick="" name="borrar" class="btn btn-danger">Borrar</a>
 
           </div>

        </div>
        `;
        productList.appendChild(element);
        
    }

    resetForm(){
       document.getElementById("productos-form").reset();
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

     const ui = new UI();
     ui.addproduct(producto);
     ui.resetForm(); 
    

    e.preventDefault();
});

document.getElementById('Product-list').addEventListener('click' , function()){
    arlert('capturado')
}
