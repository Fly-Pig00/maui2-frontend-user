export const appConfig = {
  apiUrl: process.env.REACT_APP_API_URL || 'https://secure-falls-43253.herokuapp.com/api',
  // apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',
  MICRO: 1_000_000,
  BLOCKSPERYEAR: 4_656_810,
  lcdURL: 'https://bombay-lcd.terra.dev',
  lcdChainId: 'bombay-12',
  transakAPIKey: '34e9c772-b44d-4ab8-a702-9f62ea910d1b',
  austTokenAddress: 'terra1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl', // AUST token
  marketAddress: 'terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal',
  oracleAddress: 'terra1qljxd0y3j3gk97025qvl3lgq8ygup4gsksvaxv',
  mauiFee: 0.04167,
};