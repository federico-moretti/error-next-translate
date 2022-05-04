const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  assetPrefix: '/custom',
  async rewrites() {
    return [
      { source: '/custom/_next/:path*', destination: '/_next/:path*' },
      { source: '/custom/api/:path*', destination: '/api/:path*' },
    ];
  },
});
