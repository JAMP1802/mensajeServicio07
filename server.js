const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


router.render = function (req, res) {
  var data = res.locals.data
  var str = convertDataToXML(data)
  res.send(str)
}

server.listen(port, function(){
	console.log('JSON Server is running')
});