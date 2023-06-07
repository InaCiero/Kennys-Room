
 // Ruta relativa a la carpeta de archivos estáticos
 var rutaImagen = 'imgs/mi-imagen.jpg';

 // Ruta absoluta utilizando el objeto "STATIC_URL" proporcionado por Django
 var rutaAbsoluta = "{% get_static_prefix %}" + rutaImagen;
 
 // Utiliza la ruta de imagen en tu código JavaScript
 console.log("Ruta relativa: " + rutaImagen);
 console.log("Ruta absoluta: " + rutaAbsoluta);

const stockProductos = [
  //                 La Farmacia de la Enfermera Joy
  {
    id: 01, nombre: "Lubricante Durex", cantidad: 1,
    desc: "Porque sí, Durex también hace lubricantes.",
    precio: 5990, imgs: "{% get_static_prefix %}imgs/pociones/04.jpg", tipo: "salud"
  },
  {
    id: 02, nombre: "Lubricante Yes!", cantidad: 1,
    desc: "Lubricante que hace que tu sensor corporal explote ;)",
    precio: 15990, img: "{% get_static_prefix %}imgs/pociones/02.jpg", tipo: "salud"
  },
  {
    id: 03, nombre: "Condones Durex", cantidad: 1,
    desc: "Para no hacer daño a nadie ni repartir humanos no deseados por el mundo.",
    precio: 5990, img: "imgs/pociones/03.jpg", tipo: "salud"
  },
  {
    id: 04, nombre: "Lubricante Durex Fresita", cantidad: 1,
    desc: "Si, Durex tambien hacen lubricantes en formato fresita súper rosita~",
    precio: 7990, img: "imgs/pociones/01.jpg", tipo: "salud",
  },
  {
    id: 05, nombre: "Condones Durex Ultradelgados", cantidad: 1,
    desc: "Condones ultradelgados para dermatíticos, o no sé, no soy hombre.",
    precio: 7990, img: "imgs/pociones/06.jpg", tipo: "salud",
  },
  {
    id: 06, nombre: "Condones Durex Retardantes", cantidad: 1,
    desc: "Porque durex ya no encontraba qué más sacar al mercado!",
    precio: 7990, img: "{% static 'img/gato.jpg' %}", tipo: "salud",
  },
  //                   La Boutique del Sr. Esclavo
  {
    id: 07, nombre: "Cosplay Súcubo", cantidad: 1,
    desc: "Cosplay de Marin, My Dressup Darling~ haciédo cosplay de un súcubo muy poco común.",
    precio: 5990, img: "imgs/cosplays/hot1.jpg", tipo: "cosplay"
  },
  {
    id: 08, nombre: "Cosplay Ahri !", cantidad: 1,
    desc: "Atrévete a ser la zorra ks lolera pastabasera que llevas dentro ;)",
    precio: 15990, img: "imgs/cosplays/hot2.jpg", tipo: "cosplay"
  },
  {
    id: 09, nombre: "Cosplay Shinobu", cantidad: 1,
    desc: "Directo de Demon Slayer, llega uno de los pilares más bonitos. Cuidado, que puede venir con veneno.",
    precio: 27990, img: "imgs/cosplays/hot3.jpg", tipo: "cosplay"
  },
  {
    id: 10, nombre: "Cosplay Lucy", cantidad: 1,
    desc: "Si ya dejaste de llorar, es el momento percecto para hacer cosplay de ella.",
    precio: 45000, img: "imgs/cosplays/hot4.jpg", tipo: "cosplay",
  },
  {
    id: 11, nombre: "Cosplay de... JoJo's?!", cantidad: 1,
    desc: "Así es, ni siquiera un trabajo grupal de ingeniería informática escapará de las referencias Dio! No dejes que a nadie se le escape una jojo referencia antes que a ti!",
    precio: 24990, img: "imgs/cosplays/hot5.jpg", tipo: "cosplay",
  },
  {
    id: 12, nombre: "Cosplay Marin", cantidad: 1,
    desc: "My Dresup Darling Pero la original, más linda la marin~",
    precio: 22990, img: "imgs/cosplays/hot6.jpg", tipo: "cosplay",
  },
  {
    id: 13, nombre: "Cosplay Psicópata", cantidad: 1,
    desc: "Un traje cualquiera con lencería y unas correas. más de bajo presupuesto no puede ser.",
    precio: 15990, img: "imgs/cosplays/hot7.jpg", tipo: "cosplay",
  },
  //                     El Bar del Sr. Garrison
  {
    id: 14, nombre: "Campanaita Mágica", cantidad: 1,
    desc: "Te falta sexo? Con esta campanita llegará a tus manos en cuestión de segundos!",
    precio: 5990, img: "imgs/juguetes/01.jpg", tipo: "juguete"
  },
  {
    id: 15, nombre: "Cosplay Ahri !", cantidad: 1,
    desc: "Atrévete a ser la zorra ks lolera pastabasera que llevas dentro ;)",
    precio: 15990, img: "imgs/juguetes/02.jpg", tipo: "juguete"
  },
  {
    id: 16, nombre: "Vaiby", cantidad: 1,
    desc: "Vibrador genérico chikito",
    precio: 27990, img: "imgs/juguetes/03.jpg", tipo: "juguete"
  },
  {
    id: 17, nombre: "Bolas Chinas", cantidad: 1,
    desc: "Para gustos colores, dicen...",
    precio: 45000, img: "imgs/juguetes/04.jpg", tipo: "juguete",
  },
  {
    id: 18, nombre: "Daditos Hot", cantidad: 1,
    desc: "Dados con instrucciones para innovar un poco en sus monótonas relaciones :D",
    precio: 24990, img: "imgs/juguetes/07.jpg", tipo: "juguete",
  },
  {
    id: 19, nombre: "Arma Blanca", cantidad: 1,
    desc: "Nunca viene mal tener un az bajo la manga.",
    precio: 22990, img: "imgs/juguetes/05.jpg", tipo: "juguete",
  },
  {
    id: 20, nombre: "Micrófono", cantidad: 1,
    desc: "Si con esto no canta, lamentamos no poder ayudarte.",
    precio: 15990, img: "imgs/juguetes/06.jpg", tipo: "juguete",
  },
  {
    id: 21, nombre: "Pack de Dados", cantidad: 1,
    desc: "Para cuando ya no se les ocurra nada a ninguno y estén aburridos y a solas, tenemos estos dados para potenciar su creatividad!",
    precio: 15990, img: "imgs/juguetes/Daditiosuwu.jpg", tipo: "juguete",
  }
  

  






];

let carrito = [];
const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')


if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}


stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad, tipo } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="col">
      <div class="card mt-3" style="width: 18rem; padding: 1%;">
        <img class="card-img-top mt-2 rounded" src="${img}" alt="Fotito">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-title" style="font-style: oblique;"> ${desc}</p><br>
          <p class="card-text">Precio:  $ ${precio}</p>
          <button class="btn btn-secondary" onclick="agregarProducto(${id})">Comprar</button>
        </div></div></div>
    `;
  }
});


const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};


const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad, tipo } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">Tu carrito está vacío~</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad, tipo } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Espera! ¡Primero debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "Error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...~';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 
 //   localStorage.clear() //Limpiar el almacenamiento local

 }


