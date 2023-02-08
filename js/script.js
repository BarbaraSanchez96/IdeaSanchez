const productosArray = [
    {
        id: "med1",
        titulo: "Hamburguesas de soja",
        imagen: "./img/hamburguesas1.png",
        categoria: {
            nombre: "medallones",
            id: "medallones"
        },
        precio: 400
    },
    {
        id: "med2",
        titulo: "Medallones de calabaza",
        imagen: "./img/medallones1.png",
        categoria: {
            nombre: "medallones",
            id: "medallones"
        },
        precio: 350
    },
    {
        id: "med3",
        titulo: "Medallones de legumbres",
        imagen: "./img/medallones2.png",
        categoria: {
            nombre: "medallones",
            id: "medallones"
        },
        precio: 350
    },
    {
        id: "med4",
        titulo: "Medallones de verduras",
        imagen: "./img/medallones3.png",
        categoria: {
            nombre: "medallones",
            id: "medallones"
        },
        precio: 350
    },
    {
        id: "med5",
        titulo: "Hamburguesas de soja 100%",
        imagen: "./img/hamburguesas2.png",
        categoria: {
            nombre: "medallones",
            id: "medallones"
        },
        precio: 600
    },
    {
        id: "helado1",
        titulo: "Helado de chocolate y chips",
        imagen: "./img/noticecream1.png",
        categoria: {
            nombre: "helado",
            id: "helado"
        },
        precio: 800
    },
    {
        id: "helado2",
        titulo: "Tabletas heladas de chocolate",
        imagen: "./img/nottabletas.png",
        categoria: {
            nombre: "helados",
            id: "helados"
        },
        precio: 900
    },
    {
        id: "mila1",
        titulo: "Milanesas de soja tradicionales",
        imagen: "./img/milanesas1.png",
        categoria: {
            nombre: "milanesas",
            id: "milanesas"
        },
        precio: 380
    },
    {
        id: "mila2",
        titulo: "Milanesas de soja con acelga y espinaca",
        imagen: "./img/milanesas2.png",
        categoria: {
            nombre: "milanesas",
            id: "milanesas"
        },
        precio: 400
    },
    {
        id: "nuggets",
        titulo: "Nuggets",
        imagen: "./img/nuggets.png",
        categoria: {
            nombre: "nuggets",
            id: "nuggets"
        },
        precio: 600
    },
    {
        id: "salchichas",
        titulo: "Salchichas",
        imagen: "./img/salchichas.png",
        categoria: {
            nombre: "salchichas",
            id: "salchichas"
        },
        precio: 600
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(){

    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="caracteristicas">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio}</p>
                    <button class="producto-agregar" id = "${producto.id}">Agregar</button>
                </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("active");
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    })
})