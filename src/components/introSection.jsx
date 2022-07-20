import { Trans, useTranslation } from "react-i18next";
import IntroBannerPicture from "../assets/introBannerPicture.png";
import IntroArdMoneyPicture from "../assets/introArdMoneyPicture.png";

import constants from "../utility/constants.js";
import { t } from "i18next";

function IntroText() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div class='pt-12 md:pt-24 text-center relative z-20 m-0 p-0 w-full'>
        {/* <h3 class='text-sm sm:text-lg'>Монголын анхны DAO</h3> */}
        <h3 class='text-sm sm:text-lg'>{t("mgl_first_dao")}</h3>
        <div class='mt-4 mb-12 font-bold flex justify-center text-center'>
          <div className='w-1/2'>
            <span class='text-4xl sm:text-7xl'>
              {t("financial_system_without_boundaries")}
            </span>
          </div>

          {/* <h1 class='text-4xl sm:text-7xl'>Санхүүгийн Бүрэн</h1>
          <h1 class='text-4xl sm:text-7xl mt-1'>Нээлттэй Систем</h1> */}
        </div>

        <div class='inline flex flex-col md:flex-row items-center gap-3 justify-center font-bold'>
          <a
            href={constants.POLYGON_ADDRESS}
            target='_blank'
            class='inline-block w-11/12 bg-polygon md:w-44 text-sm sm:text-md sm:w-64 rounded-lg py-3'
          >
            Polygon
          </a>
          <a
            href={"https://app.ardmoney.com/"}
            target='_blank'
            class='inline-block w-11/12 bg-yellow-500 md:w-44 text-sm sm:text-md sm:w-64 rounded-lg py-3'
          >
            Application
          </a>
          <a
            href={constants.BSC_ADDRESS}
            target='_blank'
            class='inline-block w-11/12 bg-bsc md:w-44 text-sm sm:text-md sm:w-64 rounded-lg py-3'
          >
            Binance Smart Chain
          </a>
        </div>
      </div>
    </>
  );
}

function IntroBanner() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div class='w-full flex relative z-20 justify-center mt-24'>
        <div class='rounded-lg w-11/12 2xl:w-9/12 px-10 py-14 sm:py-0 sm:px-16 intro-banner-linear-bg flex flex-col sm:flex-row justify-around items-center'>
          <div class='order-2 mt-4 sm:mt-0 sm:order-1'>
            <h2 class='flex text-4xl 2xl:text-6xl font-bold w-4/6'>
              {t("new_era")}
            </h2>
            <p class='mt-4 text-lg sm:text-md'>{t("ardmoney_is")}</p>
          </div>
          <div class='order-1 sm:order-2'>
            <img src={IntroBannerPicture} class='' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

function IntroEndingText() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div class='py-32 w-full relative z-20 flex justify-center'>
        <div class='text-center w-11/12 2xl:w-9/12'>
          <h2 class='text-2xl sm:text-4xl font-bold'>
            {t("advanced_protocol")}
          </h2>
          <p class='font-extralight text-sm sm:text-lg mt-4'>
            {t("ardMoney_uses")}
          </p>
        </div>
      </div>
    </>
  );
}

export default function introSection() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div class='text-white'>
        <div class='relative'>
          <IntroText />
          <IntroBanner />
          <img
            class='absolute bottom-8 -left-28 z-10'
            src={IntroArdMoneyPicture}
            alt=''
          />
        </div>
        <IntroEndingText />
      </div>
    </>
  );
}
