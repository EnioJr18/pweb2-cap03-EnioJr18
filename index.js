import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Olá, Mundo!');
    return;
  }

  if (req.method === 'GET' && req.url === '/sobre') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Sobre</h1>');
    return;
  }

  if (req.method === 'GET' && req.url.startsWith('/saudacao/')) {
  const partes = req.url.split('/');
  const nome = partes[2]; 
  
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Olá, ${nome}!`);
  return;
  }
});

server.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));