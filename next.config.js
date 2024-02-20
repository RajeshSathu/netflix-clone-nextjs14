// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/auth",
        destination: "/profiles",
        permanent: true,
      },
     
      {
        source: '/profiles',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

