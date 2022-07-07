import { Trans, useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";
import FooterIcon from "../assets/footerIcon.png";

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className='flex flex-col items-center px-16 py-10 mt-20 bg-primary-mini md:py-5 md:flex-row'>
      <div className='flex flex-col items-center w-full md:w-5/12 md:flex-row gap-5 md:gap-5'>
        <div>
          <img
            src={FooterIcon}
            alt='image'
            className='w-24 h-auto md:w-48 whitespace-nowrap'
          />
        </div>
        <div>
          <p className='w-full text-center md:text-left md:w-10/12 text-md'>
            {t("ardMoney_is_a_ommunity_driven")}
          </p>
          <ul className='flex justify-center mt-5 md:justify-start gap-5'>
            <li>
              <a href='https://t.me/Ardcoin_ArdMoney'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01c-.378.15-.577.298-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294c.26.006.549-.1.868-.32c2.179-1.471 3.304-2.214 3.374-2.23c.05-.012.12-.026.166.016c.047.041.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629c.093.06.183.125.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315a.337.337 0 0 0-.114-.217a.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/ardmoney'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/axxmlabs'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href='https://medium.com/@ardmoney'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 512 512'
                >
                  <path
                    fill='currentColor'
                    d='M28 28v456h456V28H28zm378.83 108.04l-24.46 23.45a7.162 7.162 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66v5.16z'
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-start justify-around w-full py-10 md:w-6/12 md:flex-row grow gap-10'>
        <div className='flex flex-col items-center w-full'>
          <h5 className='font-bold text-md'>PRODUCTS</h5>
          <ul className='flex flex-col mt-2 text-md gap-1 items-center'>
            <li className='hover:underline cursor-pointer'>
              <a target={"_blank"} href={"https://app.ardmoney.com/"}>
                DEX
              </a>
            </li>
            <li className='hover:underline'>
              <a target={"_blank"} href={"https://faucet.dsolutions.mn/"}>
                Testnet
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center w-full'>
          <h5 className='font-bold text-md'>HELP</h5>
          <ul className='flex flex-col mt-2 text-center text-md gap-1'>
            <li className='hover:underline'>
              <a
                target={"_blank"}
                href='https://www.youtube.com/watch?v=Wfc6AJVA8O4'
              >
                What is ARDM?
              </a>
            </li>
            <li className='hover:underline'>
              <a href='mailto:info@ardmoney.org'>Apply for Listing</a>
            </li>
            <li className='hover:underline'>
              <a
                target={"_blank"}
                href='https://www.idax.exchange/mn_MN/newTrade/ARDM_MONT'
              >
                Buy ARDM
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center w-full'>
          <h5 className='font-bold text-md'>GOVERNANCE</h5>
          <ul className='flex flex-col mt-2 text-center text-md gap-1'>
            <li className='hover:underline'>
              <a target={"_blank"} href='https://forum.ardmoney.com/'>
                Forum
              </a>
            </li>
            <li className='hover:underline cursor-pointer'>
              <a
                target={"_blank"}
                href='https://snapshot.org/#/ardmoneydao.eth'
              >
                Snapshot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
