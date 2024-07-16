const http = require('http');

const proxyServer = http.createServer((req, res) => {
  // Log the incoming request
  console.log(`Proxying request for ${req.url}`);

  // Define the options for the proxy request
  const options = {
    hostname: 'localhost',
    port: 4004,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  // Create the proxy request
  const proxyReq = http.request(options, (proxyRes) => {
    // Set the appropriate headers and status code for the response
    res.writeHead(proxyRes.statusCode, proxyRes.headers);

    // Pipe the proxy response back to the original response object
    proxyRes.pipe(res);
  });

  // Handle errors in the proxy request
  proxyReq.on('error', (err) => {
    console.error(`Error proxying request: ${err.message}`);
    res.statusCode = 500;
    res.end('Proxy error');
  });

  // If the original request has a body, pipe it to the proxy request
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
    req.pipe(proxyReq);
  } else {
    proxyReq.end();
  }
});

const PORT = 4004;

proxyServer.listen(PORT, () => {
  console.log(`Proxy server is running and listening on port ${PORT}`);
});
