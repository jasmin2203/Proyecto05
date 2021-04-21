let btnAgregar = document.querySelector('#btnAgregar');
let textoProducto = document.querySelector("#textoProducto");
let textoCategoria= document.querySelector("#textoCategoria");
const urlAPI = 'https://disenoydesarrolloapi.azurewebsites.net/api/Producto';

const agregarDatosAPI = (event) => {
    event.preventDefault();
    let producto = textoProducto.value;
    let categoria = textoCategoria.value;

    fetch(uri,
        {
            method: 'POST',
            body: JSON.stringify(producto),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(respuesta => respuesta.text())
        .then(data =>
            console.log(data)
        )
        .catch(erro =>
            alert(erro)
        )
}

btnAgregar.addEventListener('click', agregarDatosAPI)


