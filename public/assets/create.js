moment.locale(); 
const url = 'http://localhost:4000/';

let nombre = document.getElementById('nombre');
let descripcion = document.getElementById('descripcion');
let fecha = document.getElementById('fecha');

const insertTodo = () => {
    const data = {
        nombre: nombre.value,
        descripcion: descripcion.value,
        fecha: formatDate()
    };
      
    axios.post(url + 'todos', data).then(() => {
        nombre.value = "";
        descripcion.value = "";
        fecha.value = "";
    });

    Swal.fire({
        title: 'Éxito!',
        text: `Has creado un nuevo todo -
               nombre: ${data.nombre} |
               descripcion: ${data.descripcion} |
               fecha: ${data.fecha}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok!'
      });
};

const formatDate = (date) => {
    const dateFormat = moment(date).format("LL");
    const timeFormat = moment(date).format("LTS");
    return `${dateFormat} ${timeFormat}`;
  };
formatDate();