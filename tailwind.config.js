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
        'main-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'main-card-dark': 'linear-gradient(160.71deg, #392F40 9.07%, #3E3C4E 92.22%)',
        'main-card-btn': 'linear-gradient(124.08deg, #745FF2 3.96%, #00DDA2 94.96%)',
        'main-card-earn-banner': "url('../images/main/card-earn-banner.png')",
        'main-card-borrow-banner': "url('../images/main/card-borrow-banner.png')",
        'main-card-cards-banner': "url('../images/main/card-cards-banner.png')",
        'main-card-stocks-banner': "url('../images/main/card-stocks-banner.png')",
      }),
      boxShadow: {
        'main-card': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'main-card-dark': '-6px -13px 37px rgba(116, 95, 242, 0.1), 6px 17px 37px rgba(116, 95, 242, 0.1)',
        'main-card-btn': '9px 8px 12px rgba(114, 138, 183, 0.5)',
        'main-card-banner': 'inset 3px 6px 4px rgba(0, 0, 0, 0.25)',
      }
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
