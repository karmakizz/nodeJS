
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;



  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
switch (req.url) {
    case '/':
        res.write('<h2>Welcome to the homepage</h2>');
        break;  
    case '/about':
        res.write('<h2>About Us</h2>');
        break; 
}
    res.end();
  });
   server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  