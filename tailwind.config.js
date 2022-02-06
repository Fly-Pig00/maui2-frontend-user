module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      backgroundImage: theme => ({
        // header
        'header-deposit-btn': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        'header-deposit-btn-dark': 'linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%), rgba(49, 48, 54, 0.3);',
        'header-login-btn-dark': 'linear-gradient(154.49deg, rgba(121, 117, 131, 0.2) 5.35%, rgba(54, 53, 103, 0.2) 83.85%);',
        'header-balance': "url('../images/header/balance.svg')",
        // splash
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
        // dashboard
        'main-background': "url('../images/dashboard/background.svg')",
        'main-background-dark': "url('../images/dashboard/background-dark.svg')",
        'main-center': "url('../images/dashboard/center.svg')",
        'main-center-dark': "url('../images/dashboard/center-dark.svg')",
        'main-leftbottom': "url('../images/dashboard/leftbottom.png')",
        'main-leftbottom-dark': "url('../images/dashboard/leftbottom-dark.png')",
        'main-lefttop': "url('../images/dashboard/lefttop.png')",
        'main-lefttop-dark': "url('../images/dashboard/lefttop-dark.png')",
        'main-righttop': "url('../images/dashboard/righttop.png')",
        'main-righttop-dark': "url('../images/dashboard/righttop-dark.png')",
        'main-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'main-card-dark': 'linear-gradient(160.71deg, #392F40 9.07%, #3E3C4E 92.22%)',
        'main-card-btn': 'linear-gradient(124.08deg, #745FF2 3.96%, #00DDA2 94.96%)',
        'main-card-earn-banner': "url('../images/dashboard/card-earn-banner.png')",
        'main-card-borrow-banner': "url('../images/dashboard/card-borrow-banner.png')",
        'main-card-cards-banner': "url('../images/dashboard/card-cards-banner.png')",
        'main-card-stocks-banner': "url('../images/dashboard/card-stocks-banner.png')",        
        // borrow
        'borrow-left': "url('../images/borrow/left.png')",
        'borrow-righttop': "url('../images/borrow/righttop.png')",
        'borrow-rightbottom': "url('../images/borrow/rightbottom.png')",
        'borrow-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'borrow-card-dark': 'linear-gradient(160.71deg, rgba(65, 52, 64, 0.41) 9.07%, rgba(24, 19, 29, 0.53) 92.22%);',
        'borrow-saly': "url('../images/borrow/saly.png')",
        // stocks
        'stocks-left': "url('../images/stocks/left.png')",
        'stocks-right': "url('../images/stocks/right.png')",
        'stocks-cardbanner': "url('../images/stocks/cardbanner.png')",
        'stocks-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'stocks-card-dark': 'linear-gradient(160.71deg, rgba(65, 52, 64, 0.41) 9.07%, rgba(24, 19, 29, 0.53) 92.22%);',
        // cards
        'cards-leftmiddle': "url('../images/cards/leftmiddle.png')",
        'cards-leftbottom': "url('../images/cards/leftbottom.png')",
        'cards-rightmiddle': "url('../images/cards/rightmiddle.png')",
        'cards-rightbottom': "url('../images/cards/rightbottom.png')",
        'cards-cardtop': "url('../images/cards/cardtop.png')",
        'cards-cardbottom': "url('../images/cards/cardbottom.png')",
        // deposit
        'deposit-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'deposit-card-dark': 'linear-gradient(160.71deg, #393040 9.07%, #35303C 92.22%)',
        'deposit-card-btn': 'linear-gradient(160.71deg, #745FF2 3.96%, #00DDA2 94.96%)',
        'deposit-arrow-back': "url('../images/deposit/arrow-back.svg')",
        'deposit-crypto-bitcoin': "url('../images/deposit/crypto-bitcoin.png')",
        'deposit-crypto-saly': "url('../images/deposit/crypto-saly.png')",
        'deposit-fiat-saly': "url('../images/deposit/fiat-saly.png')",
        'deposit-leftbottom': "url('../images/deposit/leftbottom.png')",
        'deposit-transfer-from': "url('../images/deposit/transfer-from.png')",
        'deposit-tab-inactive': 'linear-gradient(180deg, #DEE2E8 0%, #EFF1F3 100%)',
        'deposit-tab-inactive-dark': 'linear-gradient(180deg, #393140 0%, #393141 100%)',
        // earn
        'earn-rightbottom': "url('../images/earn/rightbottom.png')",
        'earn-banner': "url('../images/earn/banner.png')",
        'earn-chart': "url('../images/earn/chart.png')",
        'earn-card': 'linear-gradient(107.49deg, rgba(116, 95, 242, 0.05) 9.82%, rgba(116, 95, 242, 0.06) 61.98%);',
        'earn-withdraw-card-btn': 'linear-gradient(160.71deg, #EA6D96 3.96%, #BC81CF 94.96%)',
        'earn-right-panel': 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        'earn-right-panel-dark': 'linear-gradient(97deg, #32283C 7.53%, #32283C 95.32%)',
        // common component
        'common-crypto-btc': "url('../images/_common/crypto-btc.svg')",
        'common-crypto-chat': "url('../images/_common/crypto-chat.svg')",
        'common-crypto-eth': "url('../images/_common/crypto-eth.svg')",
        'common-crypto-mtc': "url('../images/_common/crypto-mtc.svg')",
        'common-crypto-sbu': "url('../images/_common/crypto-sbu.svg')",
        'common-crypto-swrv': "url('../images/_common/crypto-swrv.svg')",
        'common-fiat-usd': "url('../images/_common/fiat-usd.svg')",
        'common-caret-up': "url('../images/_common/caret-up.svg')",
        'common-caret-up-dark': "url('../images/_common/caret-up-dark.svg')",
        'common-caret-down': "url('../images/_common/caret-down.svg')",
        'common-caret-down-dark': "url('../images/_common/caret-down-dark.svg')",
        'common-transfer-from': "url('../images/_common/transfer-from.svg')",
        'common-wallet-eth': "url('../images/_common/wallet-eth.svg')",
        'common-wallet-tera': "url('../images/_common/wallet-tera.png')",
      }),
      boxShadow: {
        // header
        'header-deposit-btn': '0px 4px 4px rgba(114, 138, 183, 0.5)',
        'header-deposit-btn-dark': '0px 4px 4px rgba(0, 0, 0, 0.5)',
        'header-login-btn': '0px 0px 4px rgba(0, 0, 0, 0.25)',
        // dashboard
        'main-card': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'main-card-dark': '-6px -13px 37px rgba(116, 95, 242, 0.1), 6px 17px 37px rgba(116, 95, 242, 0.1)',
        'main-card-btn': '9px 8px 12px rgba(114, 138, 183, 0.5)',
        'main-card-banner': 'inset 3px 6px 4px rgba(0, 0, 0, 0.25)',        
        // borrow
        'borrow-card': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'borrow-card-dark': '-9px -13px 37px rgba(116, 95, 242, 0.5), 9px 17px 37px rgba(116, 95, 242, 0.5)',
        // stocks
        'stocks-card': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'stocks-card-dark': '-9px -13px 37px rgba(116, 95, 242, 0.5), 9px 17px 37px rgba(116, 95, 242, 0.5)',
        // cards
        'cards-card': '0px 0px 9px #745FF2',
        // deposit
        'deposit-tab': '0px 4px 4px rgba(116, 95, 242, 0.26)',
        // earn
        'earn-panel': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'earn-panel-dark': '-6px -13px 37px rgba(116, 95, 242, 0.1), 6px 17px 37px rgba(116, 95, 242, 0.1)',
        'earn-expected-card': '-6px -8px 15px rgba(255, 255, 255, 0.7), 4px 6px 15px rgba(0, 0, 0, 0.13)',
        'earn-expected-card-dark': '-6px -8px 15px rgba(255, 255, 255, 0.06), 4px 6px 15px rgba(0, 0, 0, 0.13)'
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
