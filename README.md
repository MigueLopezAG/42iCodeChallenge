# 42iCodeChallenge
En este repositorio existe un cliente creado con React y un servidor creado con Express donde podemos encontrar :

- En la pantalla principal se nos muestran 2 botones que nos redireccionaran a la vista para interactuar con las funciones
- En el primer boton "Two Number Sum" donde podemos encontrar una funcion donde apartir de un array y un numero podemos encontrar la combinacion de numeros del array que al sumarlos nos da el numero que nosotros ingresamos , 
- En el segundo boton "Non-Constructible Change" encontramos lo necesario para interactuar con una funcion donde apartir de un array de numeros regresamos el minimo menor numero que no se puede generar sumando los
## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop/)

Para ejecutar este proyecto con docker como primer paso debemos clonanar este repositorio:

   ```bash
   git clone (https://github.com/MigueLopezAG/42iCodeChallenge.git)

  Una vez clonado el repositorio navegaremos al directorio del proyecto desde la terminal
    cd 42iCodeChallenge

  Ahora solo debemos correr el comando
    docker-compose up

  Y esperar hasta que se haya terminado de montar las aplicaciones

 
  ```
Ahora podremos acceder al proyecto con el siguiente enlace: 
http://localhost:300

Para ejecutar este proyecto de forma local como primer paso debemos clonanar este repositorio:

   ```bash
   git clone (https://github.com/MigueLopezAG/42iCodeChallenge.git)

Una vez clonado el repositorio navegaremos al directorio del proyecto desde la terminal
  cd 42iCodeChallenge

una vez que estemos apuntando al directorio instalaremos las dependencias de nuesta API
  cd server
  npm install

Para iniciar el servidor utilizamos la siguiente instruccion:
 npm start

una vez que tengamos corriendo el servidor procedemos a iniciar el proyecto del cliente, para esto nos ubicamos en la ruta del proyecto 42iCodeChallenge en una nueva terminal 
y accedemos a la carpeta cliente
  cd client

ya hubicados instalamos las dependencias del proyecto
  npm install

y continuamos con la configuracion para ejecutar el proyecto de manera local
  -Copiamos el archivo '.env.example' y lo renombramos como '.env'

En este archivo .env cambiamos la variable API_URL por la direccion del servidor, para este ejemplo vamos a utilizar "http://localhost:3001"
  API_URL=http://localhost:3001

una vez configurado las variables de entorno iniciaremos nuestro proyecto
  npm start
```
Ahora podremos acceder al proyecto con el siguiente enlace: 
 http://localhost:300

El servidor cuenta con algunos casos de prueba donde se valida los consumos de los servicios creados en Jest, para ejecutar estas pruebas es necesario ubicarnos en la carpeta del servidor:
```bash
  cd server

una vez ubicados en la carpeta instalamos las dependencias del servidor con la instruccion:
  npm install

ejecutaremos la siguiente instruccion para ejecutar las pruebas
  npm test
```
