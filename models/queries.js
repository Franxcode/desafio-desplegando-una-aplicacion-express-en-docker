require('dotenv').config()

const { Client } = require('pg');

const insertTodo = async (nombre, descripcion, fecha) => {
    try {
        const client = new Client();
        await client.connect();
        const result = await client.query(`INSERT INTO todos (nombre, descripcion, fecha) VALUES ('${nombre}','${descripcion}','${fecha}') RETURNING*`);
        await client.end();
        return result.rows;
    } catch (error) {
        return error;
    }
};

const getTodos = async() => {
    try {
        const client = new Client();
        await client.connect();
        const result = await client.query(`SELECT * FROM todos`);
        await client.end();
        return result.rows;
    } catch (error) {
        return error;
    }
};

const deleteTodo = async (id) => {
    try {
        const client = new Client();
        await client.connect();
        const result = await client.query(`DELETE FROM todos WHERE id = '${id}'`);
        await client.end();
        return result.rowCount;
    } catch (error) {
        return error;
    }
};

module.exports = {
    insertTodo,
    getTodos,
    deleteTodo
}