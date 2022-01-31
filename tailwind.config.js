module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: theme => ({
        'splash-logo': "url('../images/splash/logo.svg')",
        'splash-logo-dark': "url('../images/splash/logo-dark.svg')",
        'splash-leftbottom': "url('../images/splash/leftbottom.png')",
        'splash-leftbottom-dark': "url('../images/splash/leftbottom-dark.png')",
        'splash-leftmiddle': "url('../images/splash/leftmiddle.png')",
        'splash-leftmiddle-dark': "url('../images/splash/leftmiddle-dark.png')",
        'splash-righttop': "url('../images/splash/righttop.png')",
        'splash-righttop-dark': "url('../images/splash/righttop-dark.png')",
        'splash-lefttop1': "url('../images/splash/lefttop1.svg')",
        'splash-lefttop2': "url('../images/splash/lefttop2.svg')",
        'splash-righttop': "url('../images/splash/righttop.png')",
        'splash-righttop-dark': "url('../images/splash/righttop-dark.png')",
        'splash-rightbottom': "url('../images/splash/rightbottom.svg')",
        'main-background': "url('../images/main/background.svg')",
        'main-background-dark': "url('../images/main/background-dark.svg')",
        'main-center': "url('../images/main/center.svg')",
        'main-center-dark': "url('../images/main/center-dark.svg')",
        'main-leftbottom': "url('../images/main/leftbottom.svg')",
        'main-leftbottom-dark': "url('../images/main/leftbottom-dark.svg')",
        'main-lefttop': "url('../images/main/lefttop.svg')",
        'main-lefttop-dark': "url('../images/main/lefttop-dark.svg')",
        'main-righttop': "url('../images/main/righttop.svg')",
        'main-righttop-dark': "url('../images/main/righttop-dark.svg')",
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
