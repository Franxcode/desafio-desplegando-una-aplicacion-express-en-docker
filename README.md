# Requisitos
1. Tener instalado node: https://nodejs.org/es/
2. Tener instalado postgreSQL: https://www.postgresql.org/download/
3. Tener instalado docker: https://docs.docker.com/get-docker/

# Instrucciones

1. Instala las dependencias con ```npm install```.
2. Ejecuta el siguiente comando ```npm run migrate``` para crear la base de datos.
3. Si es que tu postgreSQL usa contraseña, asegurate de establecerla en el archivo ```.env```, en la variable ```PGPASSWORD=0000```, reemplazando los ```0000``` por tu clave.
4. Luego que esto ya está definido, debes asegurarte de estar dentro de la carpeta de tu proyecto y debes escribir el siguiente comando: ```docker build . -t desafio-desplegando-express-en-docker```
5. Luego de realizar este comando, comenzarás a ver mensajes de progreso como los que te muestro en la siguiente imagen:
![Docker Build Command](https://github.com/Franxcode/desafio-desplegando-una-aplicacion-express-en-docker/blob/master/public/assets/img/Docker_Build_Command.PNG?raw=true)
Nota: Si recibes algún error en esta parte del proceso, asegurate de estar corriendo el comando con permisos de administrador.
6. Finalmente ejecuta el comando: ```docker run -d -p 4000:4000 desafio-desplegando-express-en-docker```
7. Luego de realizar este comando, veras la siguiente imagen:
![Docker Run Command](https://github.com/Franxcode/desafio-desplegando-una-aplicacion-express-en-docker/blob/master/public/assets/img/Docker_Run_Command.PNG?raw=true)