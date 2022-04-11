moment.locale(); 
const url = 'http://localhost:4000/';

const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const fecha = document.getElementById('fecha');
let tbody = document.getElementById('todosInfo');

const getTodos = async () => {
    await axios.get(url + 'todos').then((data) => {
        const { todos } = data.data;
        tbody.innerHTML = "";
        todos.forEach((todo, index) => {
            tbody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${todo.nombre}</td>
          <td>${todo.descripcion}</td>
          <td>${formatDate(todo.fecha)}</td>
          <td><button class="btn btn-danger" onclick="eliminarTodo(${index + 1},'${todo.id}')">Eliminar</button></td>
        </tr>
            `;
        });
    });
};

window.onload = getTodos();

const eliminarTodo = (index, id) => {
    Swal.fire({
        title: 'Estás seguro que deseas eliminar este todo?',
        text: "Está acción no podrá ser revertida!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(url + 'todos' + '/' + id).then(() => {
                getTodos();
        });
          Swal.fire(
            'Borrado!',
            'El archivo ha sido eliminado.',
            'success'
          )
        }
    });
};

const formatDate = (date) => {
    const dateFormat = moment(date).format("LL");
    const timeFormat = moment(date).format("LTS");
    return `${dateFormat} ${timeFormat}`;
  };
formatDate();