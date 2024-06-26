module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        blur: {
          sm: '1px',
        },
        colors: {
          'primary' : '#ACE1AF',
          'secondary' : '#FFE3CA',
          'contrast-color' : '#8576FF',
          'background' : '#F6F5F5',
          'back-soft': 'rgba(246, 245, 245, 0.3)',
        },
        backgroundImage: {
          'pool': "url('../images/pool.jpg')",
        },
        minHeight: {
          '10vh': '10vh',
        }
      },
    },
    plugins: [],
  }
  