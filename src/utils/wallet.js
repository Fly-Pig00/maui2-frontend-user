import { LCDClient, Dec, MsgSend } from "@terra-money/terra.js";
import { appConfig } from "../appConfig";

const terra = new LCDClient({
  URL: appConfig.lcdURL,
  chainID: appConfig.lcdChainId,
});

export const fetchBalance = async (address) => {
  // this one should be called to refresh the amount as terra.bank.balance is not being updated well.
  // await terra.wasm.contractQuery(appConfig.marketAddress, { epoch_state: { block_height: undefined } }) //balance: { address: address }

  // we need to call terra.bank.balance twice to solve the issue
  const currentBalance_pre = await terra.bank.balance(address);
  const currentBalance = await terra.bank.balance(address);
  const uusdAmount = currentBalance[0]._coins.uusd?.amount;
  if (uusdAmount) {
    return new Dec(currentBalance[0]._coins.uusd.amount)
      .div(1000000)
      .toNumber()
      .toFixed(2);
  } else {
    return 0;
  }
};

export const fetchExpectedInterest = async (mauiAddress, callback) => {
  // aUST balance
  const uaUST = new Promise((resolve, reject) => {
    resolve(
      terra.wasm.contractQuery(
        appConfig.austTokenAddress, //terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu
        {
          balance: {
            address: mauiAddress,
          },
        },
      ),
    );
  });

  const exchangeRate = new Promise((resolve, reject) => {
    resolve(
      terra.wasm.contractQuery(
        appConfig.marketAddress, // terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s
        {
          epoch_state: {
            block_height: undefined,
          },
        },
      ),
    );
  });

  const depositRate = new Promise((resolve, reject) => {
    resolve(
      terra.wasm.contractQuery(
        appConfig.oracleAddress, // terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8
        {
          epoch_state: {
            block_height: undefined,
          },
        },
      ),
    );
  });
  await Promise.all([uaUST, exchangeRate, depositRate])
    .then((values) => {
      const ustBalance = new Dec(values[0].balance).mul(
        values[1].exchange_rate,
      );

      const annualizedInterestRate = new Dec(values[2].deposit_rate)
        .mul(appConfig.BLOCKSPERYEAR)
        .sub(appConfig.mauiFee);

      const interest = ustBalance
        .mul(annualizedInterestRate)
        .div(appConfig.MICRO)
        .toNumber();
      // console.log("aust", values[0].balance, values[1].exchange_rate);
      callback({
        exchangeRate: values[1].exchange_rate,
        austVal: values[0].balance,
        annualExpectedInterest: interest,
        depositedAmount: new Dec(values[0].balance)
          .mul(values[1].exchange_rate)
          .div(appConfig.MICRO)
          .toFixed(2)
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const depositCrypto = async (amount, from, to, sign, callbackSuccess, callbackError) => {
  try {
    const pool_contract = new MsgSend(from, to, {
      uusd: new Dec(amount).mul(appConfig.MICRO).toNumber(),
    });
  
    // Sign transaction
    const result = await sign({
      msgs: [pool_contract],
      feeDenoms: ["uusd"],
      gasPrices: "0.15uusd",
    });
  
    const tx = result.result;
  
    await terra.tx.broadcast(tx);
    callbackSuccess();
  } catch(error) {
    callbackError(error);
  }
  
}