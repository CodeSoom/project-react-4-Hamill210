const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/lol', {
      target: 'https://kr.api.riotgames.com',
      changeOrigin: true,
    }),
  );
};
