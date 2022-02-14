import { LCDClient, Dec } from "@terra-money/terra.js";
import { appConfig } from "../appConfig";

const terra = new LCDClient({
  URL: appConfig.lcdURL,
  chainID: appConfig.lcdChainId,
});

export const fetchBalance = async (address) => {
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