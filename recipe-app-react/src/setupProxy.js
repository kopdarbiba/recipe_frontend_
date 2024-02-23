const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/recipes',
    createProxyMiddleware({
      target: 'http://13.49.33.156',
      changeOrigin: true,
    })
  );
};
