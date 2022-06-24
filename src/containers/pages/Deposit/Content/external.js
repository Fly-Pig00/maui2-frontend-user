<<<<<<< HEAD
import IMG_EXCHANGE_BINANCE from '../../../../assets/images/deposit/external/binance.svg';
import IMG_EXCHANGE_BITFINEX from '../../../../assets/images/deposit/external/bitfinex.svg';
import IMG_EXCHANGE_KUCOIN from '../../../../assets/images/deposit/external/kucoin.svg';
import IMG_EXCHANGE_OKEX from '../../../../assets/images/deposit/external/okex.svg';
import IMG_EXCHANGE_FTX from '../../../../assets/images/deposit/external/ftx.svg';
import IMG_EXCHANGE_KADO from '../../../../assets/images/deposit/external/kado.svg';
import IMG_EXCHANGE_TRANSAK from '../../../../assets/images/deposit/external/transak.svg';
// import { appConfig } from '../../../../appConfig';

function LinkItem({title, img, url}) {
  const handleClick= () => {
    window.open(url, "_blank");
  }
  return (
    <div className="mt-[10px] mb-[10px] cursor-pointer flex p-[10px] pl-[30px] items-center rounded-[16px] border dark:border-transparent dark:border dark:border-[#745FF2] bg-white dark:bg-[#32283C] transition-all duration-1000" onClick={handleClick}>
      <img src={img} alt={title} className="w-[30px] h-[30px] mr-[25px]"/>
      <div className='text-[14px] md:text-[16px] leading-[21px] text-[#7E7E7E] dark:text-[#EDEDF9] transition-all duration-1000'>{title}</div>
    </div>
  )
}
function External() {
  return (
    <div className='flex p-10 pt-[70px] md:p-20 flex-col md:flex-row justify-between'>
      <div className="w-full md:w-[45%]">
        <div className='text-center mb-[20px] text-[#273855] dark:text-[#F9D3B4] text-[14px] md:text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>UST Exchanges</div>
        <LinkItem title="Binance" img={IMG_EXCHANGE_BINANCE} url="https://www.binance.com/en/trade/UST_USDT" />
        <LinkItem title="Bitfinex" img={IMG_EXCHANGE_BITFINEX} url="https://trading.bitfinex.com/t/TERRAUST:USD?demo=true" />
        <LinkItem title="KuCoin" img={IMG_EXCHANGE_KUCOIN} url="https://trade.kucoin.com/USDT-UST" />
        <LinkItem title="OKex" img={IMG_EXCHANGE_OKEX} url="https://www.okex.com/trade-spot/ust-usdt" />
        <LinkItem title="FTX" img={IMG_EXCHANGE_FTX} url="https://ftx.com/trade/UST/USD" />
      </div>
      <div className="w-full md:w-[45%] mt-[10px] md:mt-0">
        <div className='text-center mb-[20px] text-[#273855] dark:text-[#F9D3B4] text-[14px] md:text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>Fiat Exchanges</div>
        <LinkItem title="Kado Ramp" img={IMG_EXCHANGE_KADO} url="https://ramp.kado.money" />
        <LinkItem title="Transak" img={IMG_EXCHANGE_TRANSAK} url="https://global.transak.com/" />
      </div>
    </div>
  )
}

=======
import IMG_EXCHANGE_BINANCE from '../../../../assets/images/deposit/external/binance.svg';
import IMG_EXCHANGE_BITFINEX from '../../../../assets/images/deposit/external/bitfinex.svg';
import IMG_EXCHANGE_KUCOIN from '../../../../assets/images/deposit/external/kucoin.svg';
import IMG_EXCHANGE_OKEX from '../../../../assets/images/deposit/external/okex.svg';
import IMG_EXCHANGE_FTX from '../../../../assets/images/deposit/external/ftx.svg';
import IMG_EXCHANGE_KADO from '../../../../assets/images/deposit/external/kado.svg';
import IMG_EXCHANGE_TRANSAK from '../../../../assets/images/deposit/external/transak.svg';
// import { appConfig } from '../../../../appConfig';

function LinkItem({title, img, url}) {
  const handleClick= () => {
    window.open(url, "_blank");
  }
  return (
    <div className="mt-[10px] mb-[10px] cursor-pointer flex p-[10px] pl-[30px] items-center rounded-[16px] border dark:border-transparent dark:border dark:border-[#745FF2] bg-white dark:bg-[#32283C] transition-all duration-1000" onClick={handleClick}>
      <img src={img} alt={title} className="w-[30px] h-[30px] mr-[25px]"/>
      <div className='text-[14px] md:text-[16px] leading-[21px] text-[#7E7E7E] dark:text-[#EDEDF9] transition-all duration-1000'>{title}</div>
    </div>
  )
}
function External() {
  return (
    <div className='flex p-10 pt-[70px] md:p-20 flex-col md:flex-row justify-between'>
      <div className="w-full md:w-[45%]">
        <div className='text-center mb-[20px] text-[#273855] dark:text-[#F9D3B4] text-[14px] md:text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>UST Exchanges</div>
        <LinkItem title="Binance" img={IMG_EXCHANGE_BINANCE} url="https://www.binance.com/en/trade/UST_USDT" />
        <LinkItem title="Bitfinex" img={IMG_EXCHANGE_BITFINEX} url="https://trading.bitfinex.com/t/TERRAUST:USD?demo=true" />
        <LinkItem title="KuCoin" img={IMG_EXCHANGE_KUCOIN} url="https://trade.kucoin.com/USDT-UST" />
        <LinkItem title="OKex" img={IMG_EXCHANGE_OKEX} url="https://www.okex.com/trade-spot/ust-usdt" />
        <LinkItem title="FTX" img={IMG_EXCHANGE_FTX} url="https://ftx.com/trade/UST/USD" />
      </div>
      <div className="w-full md:w-[45%] mt-[10px] md:mt-0">
        <div className='text-center mb-[20px] text-[#273855] dark:text-[#F9D3B4] text-[14px] md:text-[16px] font-semibold tracking-[1px] transition-all duration-1000'>Fiat Exchanges</div>
        <LinkItem title="Kado Ramp" img={IMG_EXCHANGE_KADO} url="https://ramp.kado.money" />
        <LinkItem title="Transak" img={IMG_EXCHANGE_TRANSAK} url="https://global.transak.com/" />
      </div>
    </div>
  )
}

>>>>>>> 3a060482d917cd2b6df3cc1297157ec8cc7345d3
export default External;