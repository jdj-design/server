const http = require('node:http');
const PORT =3300;
const host = 'localhost';

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '' ) {
      if (request.method === 'GET') {
        response.end("Hello, Galvanized");
      }
    }
    response.statusCode = 404;
    response.end();
  });
  server.listen(PORT, host, () => {
    console.log(`Server running on ${host}: ${PORT}`);
  });