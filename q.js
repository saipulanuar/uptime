const fetch = require('node-fetch')
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

q = async () => {
  try {
    await fetch('https://fern-concise-packet.glitch.me')
  console.log('up')
  } catch {
    console.log('err')
  }
}
setInterval(q, 240000)