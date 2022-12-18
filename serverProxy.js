const { createProxyMiddleware } = require('http-proxy-middleware');

// set up a proxy that will forward all requests to the CoinGecko API 
const proxy = createProxyMiddleware({
    target: 'https://api.coingecko.com/api/v3/coins/bitcoin',
    changeOrigin: true,
  });

  //using Express.js, use the app.use function to apply the proxy to all requests
  const app = express();

  app.use('/api', proxy);
  
  //start server
  app.listen(3000, () => {
    console.log('Proxy server listening on port 3000');
  });