export const appConfig = {
  apiUrl: process.env.REACT_APP_API_URL || 'https://api.mauibank.io/api',
  // apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',
  MICRO: 1_000_000,
  BLOCKSPERYEAR: 4_656_810,

  mauiFee: 0.04167,
  transakAPIKey: 'ccf6dab2-7abc-4efa-ad9e-aa5f66ff0db3', //'34e9c772-b44d-4ab8-a702-9f62ea910d1b',
  
  lcdURL: 'https://bombay-lcd.terra.dev',
  lcdChainId: 'bombay-12',
  
  austTokenAddress_test: 'terra1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl', // AUST token
  austTokenAddress_main: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu', // AUST token
  marketAddress_test: 'terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal',
  marketAddress_main: 'terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s',
  oracleAddress_test: 'terra1qljxd0y3j3gk97025qvl3lgq8ygup4gsksvaxv',
  oracleAddress_main: 'terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8',
};