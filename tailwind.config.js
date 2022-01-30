module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: theme => ({
        'logo': "url('../images/splash/logo.svg')",
        'logo-dark': "url('../images/splash/logo-dark.svg')",
        'leftbottom': "url('../images/splash/leftbottom.png')",
        'leftbottom-dark': "url('../images/splash/leftbottom-dark.png')",
        'leftmiddle': "url('../images/splash/leftmiddle.png')",
        'leftmiddle-dark': "url('../images/splash/leftmiddle-dark.png')",
        'righttop': "url('../images/splash/righttop.png')",
        'righttop-dark': "url('../images/splash/righttop-dark.png')",
        'lefttop1': "url('../images/splash/lefttop1.svg')",
        'lefttop2': "url('../images/splash/lefttop2.svg')",
        'righttop': "url('../images/splash/righttop.png')",
        'righttop-dark': "url('../images/splash/righttop-dark.png')",
        'rightbottom': "url('../images/splash/rightbottom.svg')",
      })
    },
    colors: {
    },
    animation: {
      move1: 'keyframe1 5s ease 0s 1 forwards'
    },
    keyframes: {
      keyframe1: {
        '0%': { left: '0px'},
        '100%': { left: '500px'}
      }
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}
