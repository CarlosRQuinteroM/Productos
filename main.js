class Producto {
    constructor(name, price, year ){
        this.name = name;
        this.price = price;
        this.year = year;

    }
};

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
        
    };

    resetForm(){
       document.getElementById("productos-form").reset();
    };

    deleteProduct(element){
        if(element.name === 'borrar'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMassage('Producto Eliminado ','info');
        }

    };

    showMassage(message, cssClass) {
       const div = document.createElement('div');
       div.className = `alert alert-${cssClass} mt-3`; 
       div.appendChild(document.createTextNode(message));
    //    mostrado en el DOM
         const container = document.querySelector('.container-fluid');
         const app = document.querySelector('#App');
         container.insertBefore(div , app);

         setTimeout(function(){
           document.querySelector('.alert').remove();
         }, 3000);
    };
}


// Eventos del DOM
document.getElementById('productos-form')
    .addEventListener('submit', function (e) {
     const name = document.getElementById('name').value;
     const price = document.getElementById('price').value;
     const year = document.getElementById('year').value;

    const producto = new Producto(name, price , year);

     const ui = new UI();
     if(name === '' || price === '' || yerar === ''){
         ui.showMassage('Los campos no estan completos')
     }
     ui.addproduct(producto);
     ui.resetForm(); 
     ui.showMassage('Producto Agregado', 'success');
    

    e.preventDefault();
});

document.getElementById('Product-list').addEventListener( 'click' , function(e){
    const ui = new UI();
    ui.deleteProduct(e.target)

} ) ; 


