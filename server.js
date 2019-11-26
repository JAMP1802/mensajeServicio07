const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const routerUser = jsonServer.router('usuario.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(routerUser);

server.listen(port);