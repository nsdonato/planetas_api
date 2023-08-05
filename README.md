# Proyecto: planetas_api 🌏

👋🏻 Bienvenidx al Proyecto de [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f) desarrollada por la comunidad de Discord de [👩🏻‍💻 vamoacodear 👩🏻‍💻](https://www.twitch.tv/vamoacodear)! En este caso la parte del BackEnd.

# Descripción

En este reto, construiremos una API para que sea consumido por el front del proyecto [vamosacodearplanetas](https://github.com/nsdonato/vamosacodearplanetas). 🎨 Lucirá muy bien en tu portfolio.

Lo que intetamos hacer con este proyecto es simular un espacio de trabajo.
Donde si bien no aplicamos al 100% metodologia Agile, ni marco Scrum, intentamos hacer lo posible considerando que es un grupo de trabajo interdiciplinario con diferentes husos horarios.

Para ello mediante Trello creamos y asignamos tareas, donde van cambiando de columna según su estado. Una vez realizada, el/la colaborador/a realiza un PR, se hace un Code Review y una vez que al menos 2 aprobadores den el ok, recién ahí se mergea a Main.
De esta manera aprenderas cosas del día a día de un ambiente laboral!:

- Metodología Agile
- Marco Scrum
- PR
- Code Review
- Utilización de diferentes tecnologías que decidimos utilizar en el proyecto, como: Git, Github, Node.js, Express, Mongo, Prisma, entre otras!

# Permisos para contribuir

Debes estar en Discord y en el canal #vamosacodearplanetas pedir que agreguemos tu usuario de GitHub al repositorio que quieras aportar, en este caso back.

# Dependencias, extensiones

- [Node.js](https://nodejs.org/en/) instalar versión LTS
- [Nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

# Pre-Instalación

Utilizar el comando `nvm use`, esto verifica si hay un archivo .nvmrc en el proyecto y si no estas usando esa versión la setea. Si no la tenes instalada al final del comentario del package, te deja el comando para instalar la versión correspondiente en tu pc.

# Comenzando, clonación de repositorio

```
git clone https://github.com/nsdonato/planetas_api.git
```

## Instalar dependencias:

```bash
  npm install my-project
  cd my-project
```

## Variables de entorno

Renombrar `.env.template` a `.env` y completar las variables de entorno para que se pueda conectar a url de la base de datos

## Levantar el servidor

```bash
  npm run dev
```

## API Reference

Local: localhost:8000/api/planet
#### Get item

```http
  GET /api/planet/${id}
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Required**. fecth a single planet by its name |

#### Health check

```http
  GET /api/planet
```


## Diagrama de la base de datos

Dos tablas con relación uno a uno.

![diagrama db](docs/diagrama%20db.png)

# Ayuda


Si tienes cualquier duda puedes preguntar en nuestro [Discord](https://discord.io/vamoacodear) canal #vamosacodearplanetas

<!-- # Pull Request
`Por favor utilizar el template de Pull Request para poder darle al code reviewer un mejor panorama de lo que va a revisar, gracias.` -->
# Colaboradores


<a href="https://github.com/nsdonato/planetas_api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nsdonato/planetas_api" />
</a>
