//boton que acciona la ejecución de nuestra pagina
let botonCargar = document.getElementById("boton");
botonCargar.addEventListener('click', consumirServicio);


//Traer los parrafos html que quiero modifica con JS
let nombre = document.getElementById("nombreUsuario");
let id = document.getElementById("idUsuario");
let telefono = document.getElementById("telefonoUsuario");
let rh = document.getElementById("rhUsuario");
let direccion = document.getElementById("direccionUsuario");




function consumirServicio() {

    let superHeroe = {
        nombre: "BRUNO DIAZ GALLEGO",
        id: "10000001",
        telefono: "01800-batman",
        rh: "O+",
        direccion: "baticueva calle 100"
    }


    //cargando los datos de la tarjeta desde los atributos de un objeto
    nombre.textContent = superHeroe.nombre;
    id.textContent = superHeroe.id;
    telefono.textContent = superHeroe.telefono;
    rh.textContent = superHeroe.rh;
    direccion.textContent = superHeroe.direccion;



}