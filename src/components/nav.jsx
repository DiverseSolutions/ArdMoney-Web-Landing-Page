import { Trans, useTranslation } from "react-i18next";

import Logo from "../assets/logo.png";
import NavBurgerIcon from "../assets/navBurgerIcon.png";
import LitePaper from "../assets/LitePaper.pdf";
import constants from "../utility/constants.js";
import EnglishFlag from "../assets/icons/EnglishFlag";
import MongoliaFlag from "../assets/icons/MongoliaFlag";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log("language: ", language);
    i18n.changeLanguage(language);
  };

  return (
    <div class='fixed z-50 pt-10 px-6 sm:px-12 sm:pt-0 md:pt-2 text-white bg-primary w-full'>
      <div class='h-16 flex justify-center md:justify-between items-center w-full'>
        <a href='#'>
          <img
            src={Logo}
            class='w-32 h-32 md:w-20 md:h-20 z-10 cursor-pointer'
            alt=''
          />
        </a>

        {/* <a href="#" class="sm:hidden"> */}
        {/*   <img src={NavBurgerIcon} class="" alt="" /> */}
        {/* </a> */}

        <div class='z-10 text-base hidden sm:flex items-center te xt-sm h-auto'>
          <Link to='opportunities' class='mr-5 cursor-pointer 2xl:hidden'>
            {t("ardMoney")}
          </Link>
          <Link to='features' class='mr-5 cursor-pointer 2xl:hidden'>
            {t("financial_system_without_boundaries")}
          </Link>
          <Link to='news' class='mr-5 cursor-pointer 2xl:hidden'>
            {t("blog_post")}
          </Link>

          <a href={constants.BSC_ADDRESS} class='mr-5' target={"_blank"}>
            BscScan
          </a>
          <a href={constants.POLYGON_ADDRESS} class='mr-5' target={"_blank"}>
            PolygonScan
          </a>
          <a href={"https://app.ardmoney.com/"} class='mr-5' target={"_blank"}>
            Application
          </a>
          <a href={LitePaper} class='mr-5' target={"_blank"}>
            Litepaper
          </a>
          <div class='inline-flex shadow-sm' role='group'>
            <button
              type='button'
              class='inline-flex items-center py-1 px-2 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-700 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white '
              onClick={() => changeLanguage("en")}
            >
              <EnglishFlag />
            </button>
            <button
              type='button'
              class='inline-flex items-center py-1 px-2 text-sm font-medium text-gray-900 bg-transparent rounded-r-lg border  border-gray-700 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white '
              onClick={() => changeLanguage("mn")}
            >
              <MongoliaFlag />
            </button>
          </div>
          {/* <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("mn")}>MN</button> */}
          {/* <button class="mr-2 text-sm button-linear-bg px-4 py-2 rounded-full">Тун удахгүй</button> */}
          {/* <button class="text-sm button-linear-bg px-4 py-2 rounded-full">EN / MN</button> */}
        </div>
      </div>

      <div class='md:pt-5 h-16 w-full items-center justify-center absolute top-0 left-0 hidden 2xl:flex'>
        <Link to='opportunities' class='cursor-pointer'>
          {t("ardMoney")}
        </Link>
        <Link to='features' class='px-5 cursor-pointer'>
          {t("financial_system_without_boundaries")}
        </Link>
        <Link to='news' class='cursor-pointer'>
          {t("blog_post")}
        </Link>
      </div>
    </div>
  );
}
