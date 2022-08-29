const { calculateNewValue } = require('@testing-library/user-event/dist/utils');

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
        'header-history': "url('../images/header/history.svg')",
        'header-history-dark': "url('../images/header/history-dark.svg')",
        //intro header
        "introheader-logoimage": "url('../images/_intro/introheader/logoimage.png')",
        "introheader-mobiletab": "url('../images/_intro/introheader/mobiletab.png')",
        "introheader-mobilemenuclose": "url('../images/_intro/introheader/mobilemenuclose.png')",
        //intro dashboard
        "introdashboard-logoimage":"url('../images/_intro/introdashboard/logo.png')",
        "introdashboard-fullscreenimage":"url('../images/_intro/introdashboard/ep_full-screen.png')",
        "introdashboard-starimage":"url('../images/_intro/introdashboard/stars.png')",
        "introdashboard-shape1":"url('../images/_intro/introdashboard/shape1.png')",
        "introdashboard-shape2":"url('../images/_intro/introdashboard/shape2.png')",
        "introdashboard-shape3":"url('../images/_intro/introdashboard/shape3.png')",
        "introdashboard-shape4":"url('../images/_intro/introdashboard/shape4.png')",
        "introdashboard-showdemo1":"url('../images/_intro/introdashboard/showdemo1.png')",
        "introdashboard-showdemo2":"url('../images/_intro/introdashboard/showdemo2.png')",
        "introdashboard-iphonecut":"url('../images/_intro/introdashboard/iPhone_cut.png')",
        "introdashboard-fullphone":"url('../images/_intro/introdashboard/iPhone-13-Pro-Front.png')",
        "introdashboard-iPhone-2":"url('../images/_intro/introdashboard/iPhone-2.png')",
        "introdashboard-phone-photo":"url('../images/_intro/introdashboard/phone-photo.png')",
        "introdashboard-arrow":"url('../images/_intro/introdashboard/arrow.png')",
        "introdashboard-linegroup":"url('../images/_intro/introdashboard/linegroup.png')",
        "introdashboard-earn-back":"url('../images/_intro/introdashboard/earn_title.png')",
        "introdashboard-borrow-back":"url('../images/_intro/introdashboard/BORROW.png')",
        "introdashboard-card":"url('../images/_intro/introdashboard/card.png')",
        "introdashboard-card1":"url('../images/_intro/introdashboard/card1.png')",
        "introdashboard-card2":"url('../images/_intro/introdashboard/card2.png')",
        "introdashboard-card3":"url('../images/_intro/introdashboard/card3.png')",
        "introdashboard-maccom":"url('../images/_intro/introdashboard/MacStudio.png')",
        "introdashboard-phone-photo-mobile":"url('../images/_intro/introdashboard/phone-photo-mobile.png')",
        "introdashboard-section1-bg":"url('../images/_intro/introdashboard/section1_bg.gif')",

        //intro earn
        "introearn-starsstart":"url('../images/_intro/introearn/StarsStart.png')",
        "introearn-earth":"url('../images/_intro/introearn/earth.gif')",
        "introearn-section2":"url('../images/_intro/introearn/section2.png')",
        "introearn-star-group2":"url('../images/_intro/introearn/star-group2.png')",
        "introearn-linegroup":"url('../images/_intro/introearn/linegroup.png')",
        "introearn-bitcoin":"url('../images/_intro/introearn/bitcoin.png')",
        "introearn-arrow2":"url('../images/_intro/introearn/arrow2.png')",
        "introearn-currenty":"url('../images/_intro/introearn/currenty.png')",
        "introearn-chart":"url('../images/_intro/introearn/chart.png')",
        "introearn-down-arrow":"url('../images/_intro/introearn/iconoir_nav-arrow-down.png')",
        'introearn-title-gradient': 'linear-gradient(95.29deg, #1F0A9C 7.4%, #00DDA2 84.23%, rgba(6, 136, 101, 0) 88.55%)',
        'introearn-price-gradient': 'linear-gradient(124.08deg, #1199FA 3.96%, #00DDA2 94.96%)',
        //intro borrow
        "introborrow-section2":"url('../images/_intro/introborrow/section2.gif')",
        "introborrow-section2mobile":"url('../images/_intro/introborrow/section2.gif')",
        "introborrow-switchcolor":"url('../images/_intro/introborrow/switchcolor.png')",
        'introborrow-calculate-gradient': 'linear-gradient(124.08deg, #1199FA 3.96%, #00DDA2 94.96%)',
        "introborrow-chart":"url('../images/_intro/introborrow/chart.png')",
        "introborrow-shape1":"url('../images/_intro/introborrow/shape1.png')",
        "introborrow-shape2":"url('../images/_intro/introborrow/shape2.png')",
        //intro cards
        "introborrow-card4":"url('../images/_intro/introcards/card4.png')",
        "introborrow-card1":"url('../images/_intro/introcards/card1.png')",
        "introborrow-ivancard":"url('../images/_intro/introcards/ivancard.png')",
        "introborrow-maccom":"url('../images/_intro/introcards/maccom.png')",
        "introborrow-iPhone":"url('../images/_intro/introcards/iPhone.png')",
        "introborrow-comimage":"url('../images/_intro/introcards/comimage.png')",
        //intro team
        "introteam-starlight1":"url('../images/_intro/introteam/starlight1.png')",
        "introteam-starlight2":"url('../images/_intro/introteam/starlight2.png')",
        "introteam-chunhu":"url('../images/_intro/introteam/chunhu.png')",
        "introteam-chunhu2":"url('../images/_intro/introteam/chunhu2.png')",
        "introteam-william":"url('../images/_intro/introteam/william.png')",
        "introteam-william2":"url('../images/_intro/introteam/william2.png')",
        "introteam-dev":"url('../images/_intro/introteam/dev.png')",
        "introteam-dev2":"url('../images/_intro/introteam/dev2.png')",
        "introteam-ivan":"url('../images/_intro/introteam/ivan.png')",
        "introteam-ivan2":"url('../images/_intro/introteam/ivan2.png')",
        "introteam-cofounder":"url('../images/_intro/introteam/cofounder.png')",
        "introteam-cofounder2":"url('../images/_intro/introteam/cofounder2.png')",
        "introteam-eric":"url('../images/_intro/introteam/eric.png')",
        "introteam-eric2":"url('../images/_intro/introteam/eric2.png')",
        "introteam-arrowcurve":"url('../images/_intro/introteam/arrowcurve.png')",
        "introteam-clickhere":"url('../images/_intro/introteam/clickhere.png')",
        'introteam-title-gradient': 'linear-gradient(124.08deg, #2708E4 3.96%, #00DDA2 94.96%, #0F6B53 94.96%);',
        // splash
        'splash-logo': "url('../images/splash/logo.png')",
        'splash-logo-dark': "url('../images/splash/logo-dark.png')",
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
        // login
        'login-background': 'radial-gradient(58.43% 103.88% at 56.74% 50%, #DEE2E8 14.58%, #929CEE 63.66%, #E6C8E7 100%);',
        'login-background-dark': 'linear-gradient(287.56deg, #32283C 8.81%, #3B3054 52.57%, #32283C 100%);',
        'login-leftbottom': "url('../images/login/leftbottom.png')",
        'login-middletop': "url('../images/login/middletop.png')",
        'login-middlemiddle': "url('../images/login/middlemiddle.png')",
        'login-middlebottom': "url('../images/login/middlebottom.png')",
        'login-rightbottom': "url('../images/login/rightbottom.png')",
        'login-righttop': "url('../images/login/righttop.png')",
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
        'main-card-btn': 'linear-gradient(124.08deg, #1199FA 3.96%, #00DDA2 94.96%)',
        'main-card-earn-banner': "url('../images/dashboard/card-earn-banner.jpg')",
        'main-card-borrow-banner': "url('../images/dashboard/card-borrow-banner.jpg')",
        'main-card-cards-banner': "url('../images/dashboard/card-cards-banner.png')",
        'main-card-stocks-banner': "url('../images/dashboard/card-stocks-banner.jpg')",
        // borrow
        'borrow-left': "url('../images/borrow/left.png')",
        'borrow-righttop': "url('../images/borrow/righttop.png')",
        'borrow-rightbottom': "url('../images/borrow/rightbottom.png')",
        'borrow-leftbottom': "url('../images/borrow/leftbottom.png')",
        'borrow-rightbottom2': "url('../images/borrow/rightbottom2.png')",
        'borrow-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'borrow-card-dark': 'linear-gradient(160.71deg, rgba(65, 52, 64, 0.41) 9.07%, rgba(24, 19, 29, 0.53) 92.22%);',
        'borrow-saly': "url('../images/borrow/saly.png')",
        'borrow-borrow': "url('../images/borrow/borrow.png')",
        'borrow-soon': "url('../images/borrow/soon.svg')",
        'borrow-card-small-dark': 'linear-gradient(110.16deg, #302B34 0.48%, #22242A 106.09%)',
        // stocks
        'stocks-left': "url('../images/stocks/left.png')",
        'stocks-right': "url('../images/stocks/right.png')",
        'stocks-cardbanner': "url('../images/stocks/cardbanner.png')",
        'stocks-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'stocks-card-dark': 'linear-gradient(160.71deg, rgba(65, 52, 64, 0.41) 9.07%, rgba(24, 19, 29, 0.53) 92.22%);',
        'stocks-tooltip': "url('../images/stocks/tooltip.svg')",
        'stocks-tooltip-dark': "url('../images/stocks/tooltip-dark.svg')",
        'stocks-icon-aapl': "url('../images/stocks/icon-aapl.png')",
        'stocks-icon-abnb': "url('../images/stocks/icon-abnb.png')",
        'stocks-btn-buy': "url('../images/stocks/btn-buy.png')",
        'stocks-btn-sell': "url('../images/stocks/btn-sell.png')",
        'stocks-btn-neutral': "url('../images/stocks/btn-neutral.png')",
        'stocks-btn-neutral-dark': "url('../images/stocks/btn-neutral-dark.png')",
        'stocks-oneclick': "url('../images/stocks/oneclick.png')",
        'stocks-stocks': "url('../images/stocks/stocks.png')",
        'stocks-stocks-dark': "url('../images/stocks/stocks-dark.png')",
        'stocks-availablesoon': "url('../images/stocks/availablesoon.png')",
        'stocks-availablesoon-dark': "url('../images/stocks/availablesoon-dark.png')",
        // cards
        'cards-leftmiddle': "url('../images/cards/leftmiddle.png')",
        'cards-leftbottom': "url('../images/cards/leftbottom.png')",
        'cards-rightmiddle': "url('../images/cards/rightmiddle.png')",
        'cards-rightbottom': "url('../images/cards/rightbottom.png')",
        'cards-cardtop': "url('../images/cards/cardtop.png')",
        'cards-cardbottom': "url('../images/cards/cardbottom.png')",
        'cards-arrowhead-down': "url('../images/cards/arrowhead-down.svg')",
        'cards-availablesoon': "url('../images/cards/availablesoon.png')",
        // deposit
        'deposit-card': 'linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)',
        'deposit-card-dark': 'linear-gradient(160.71deg, #393040 9.07%, #35303C 92.22%)',
        'deposit-card-btn': 'linear-gradient(160.71deg, #1199FA 3.96%, #00DDA2 94.96%)',
        'deposit-arrow-back': "url('../images/deposit/arrow-back.svg')",
        'deposit-crypto-bitcoin': "url('../images/deposit/crypto-bitcoin.png')",
        'deposit-crypto-saly': "url('../images/deposit/crypto-saly.jpg')",
        'deposit-fiat-saly': "url('../images/deposit/fiat-saly.gif')",
        'deposit-leftbottom': "url('../images/deposit/leftbottom.png')",
        'deposit-transfer-from': "url('../images/deposit/transfer-from.png')",
        'deposit-tab-inactive': 'linear-gradient(180deg, #DEE2E8 0%, #EFF1F3 100%)',
        'deposit-tab-inactive-dark': 'linear-gradient(180deg, #393140 0%, #393141 100%)',
        // earn
        'earn-rightbottom': "url('../images/earn/rightbottom.png')",
        'earn-banner': "url('../images/earn/banner.jpg')",
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
        'common-crypto-usdt': "url('../images/_common/crypto-usdt.png')",
        'common-crypto-dai': "url('../images/_common/dai-logo.png')",
        'common-debit-card': "url('../images/_common/debit-card.png')",
        'common-bank': "url('../images/_common/bank.png')",
        'common-fiat-usd': "url('../images/_common/fiat-usd.svg')",
        'common-caret-up': "url('../images/_common/caret-up.svg')",
        'common-caret-up-dark': "url('../images/_common/caret-up-dark.svg')",
        'common-caret-down': "url('../images/_common/caret-down.svg')",
        'common-caret-down-dark': "url('../images/_common/caret-down-dark.svg')",
        'common-transfer-from': "url('../images/_common/transfer-from.svg')",
        'common-wallet-eth': "url('../images/_common/wallet-eth.svg')",
        'common-wallet-tera': "url('../images/_common/wallet-tera.png')",
        'common-video-play': "url('../images/_common/video-play.png')",
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
        'borrow-card-small': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'borrow-card-small-dark': '0px 0px 37px rgba(162, 89, 255, 0.33)',
        // stocks
        'stocks-card': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'stocks-card-dark': '-9px -13px 37px rgba(116, 95, 242, 0.5), 9px 17px 37px rgba(116, 95, 242, 0.5)',
        // cards
        'cards-card': '0px 0px 9px #1199FA',
        // deposit
        'deposit-tab': '0px 4px 4px rgba(116, 95, 242, 0.26)',
        // earn
        'earn-panel': '-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)',
        'earn-panel-dark': '-6px -13px 37px rgba(116, 95, 242, 0.1), 6px 17px 37px rgba(116, 95, 242, 0.1)',
        'earn-expected-card': '-6px -8px 15px rgba(255, 255, 255, 0.7), 4px 6px 15px rgba(0, 0, 0, 0.13)',
        'earn-expected-card-dark': '-6px -8px 15px rgba(255, 255, 255, 0.06), 4px 6px 15px rgba(0, 0, 0, 0.13)'
      },
      backgroundPosition: {
        'earth': '-101px -93px'
      }
    },
    colors: {
    },
    animation: {
      move1: 'keyframe1 5s ease 0s 1 forwards',
      zoom1: 'keyframe2 3s linear 2s forwards',
      zoom2: 'keyframe3 3s linear 2s forwards',
      display1: 'keyframe4 3s linear forwards',
      move2: 'keyframe5 3s linear forwards',
      move3: 'keyframe6 3s linear forwards',
      move4: 'keyframe7 3s linear forwards'
    },
    keyframes: {
      keyframe1: {
        '0%': { left: '0px'},
        '100%': { left: '500px'}
      },
      keyframe2:{
        "0%" :{fontSize:'24px', lineHeight:'29px'},
        "100%" :{fontSize:'250px', lineHeight:'298px'},
      },
      keyframe3:{
        "0%":{top:'0px', width:'373px', height:'373px'},
        "100%":{top:'-250px', width:'120vh', height:'120vh'}
      },
      keyframe4:{
        "0%":{opacity:0},
        "100%":{opacity:1}
      },
      keyframe5:{
        "0%":{fontSize: '48px', lineHeight:'57px'},
        "100%":{position: 'absolute', left: '70vw', bottom: '60vh', width: '120vh', height: '120vh'}
      },
      keyframe6: {
        "0%": {left: '-120px', top: 0, transform: 'rotate(150deg)' },
        "25%": {left: '-120px', top: '35vh'},
        "50%": {left: '-120px', top: '70vh'},
        "100%": {left: '-120px', top: '105vh'},
      },
      keyframe7:{
        "0%":{bottom: '70vh'},
        "100%":{opacity: '60vh'}
      },
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ]
}
// text-[20px] md:text-[48px] leading-[24px] md:leading-[57px] font-[500] md:font-[600] text-[#FFF] text-center