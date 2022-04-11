# Requisitos
Tener instalado node: https://nodejs.org/es/
Tener instalado postgreSQL: https://www.postgresql.org/download/
Tener instalado docker: https://docs.docker.com/get-docker/

# Instrucciones

Crear en postgreSQL la siguiente tabla: todos
El código para crear la tabla es el siguiente:
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todos (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	nombre VARCHAR(64) NOT NULL,
	descripcion VARCHAR(255) NOT NULL,
	fecha TIMESTAMP);
```
Si es que tu postgreSQL usa contraseña, asegurate de establecerla en el archivo .env, en la variable PGPASSWORD=0000, reemplazando los 0000 por tu clave.

Luego que esto ya está definido, debes asegurarte de estar dentro de la carpeta de tu proyecto.
Debes escribir el siguiente comando: ```docker build . -t desafio-desplegando-express-en-docker```
Luego de realizar este comando, comenzarás a ver mensajes de progreso como los que te muestro en la siguiente imagen:
<img src="" alt="docker build">
[Si recibes algún error en esta parte del proceso, asegurate de estar corriendo el comando con permisos de administrador.]
Finalmente ejecuta el comando: ```docker run -d -p 4000:4000 desafio-desplegando-express-en-docker```