import IntroBannerPicture from '../assets/introBannerPicture.png';
import IntroArdMoneyPicture from '../assets/introArdMoneyPicture.png'

function IntroText(){
  return (
    <>
      <div class="pt-24 text-center relative z-20 m-0 p-0">
        <h3 class="text-sm sm:text-lg">Mongolia’s First DAO</h3>
        <div class="mt-4 mb-12 font-bold">
          <h1 class="text-4xl sm:text-7xl">Bringing True</h1>
          <h1 class="text-4xl sm:text-7xl mt-1">Permissionless System</h1>
        </div>

        <div class="inline font-bold">
          <a href="#" class="inline-block bg-polygon w-44 text-sm sm:text-md sm:w-64 rounded-lg py-3 mr-5">Polygon</a>
          <a href="#" class="inline-block bg-bsc w-44 text-sm sm:text-md sm:w-64 rounded-lg py-3">Binance Smart Chain</a>
        </div>
      </div>
    </>
  )
}

function IntroBanner(){
  return (
    <>
      <div class="w-full flex relative z-20 justify-center mt-24">
        <div class="rounded-lg w-11/12 2xl:w-9/12 px-10 py-14 sm:py-0 sm:px-16 intro-banner-linear-bg flex flex-col sm:flex-row justify-around items-center">
          <div class="order-2 mt-4 sm:mt-0 sm:order-1">
            <h2 class="text-4xl 2xl:text-6xl font-bold">Санхүүгийн оролцооны</h2>
            <h2 class="text-4xl 2xl:text-6xl font-bold">шинэ эрин үе</h2>
            <p class="mt-4 text-lg sm:text-md">АрдМааний нь санхүүгийн шинэ тогтолцоог бий болгох юм.</p>
          </div>
          <div class="order-1 sm:order-2">
            <img src={IntroBannerPicture} class="" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

function IntroEndingText(){
  return (
    <>
      <div class="py-32 w-full relative z-20 flex justify-center">
        <div class="text-center w-11/12 2xl:w-9/12">
          <h2 class="text-2xl sm:text-4xl font-bold">Lorem Ipsum Lorem Ipsum</h2>
          <p class="font-extralight text-sm sm:text-lg mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
        </div>
      </div>
    </>
  )
}





export default function introSection() {
  return (
    <>
      <div class="text-white">
        <div class="relative">
          <IntroText />
          <IntroBanner />
          <img class="absolute bottom-8 -left-28 z-10" src={IntroArdMoneyPicture} alt="" />
        </div>
        <IntroEndingText />
      </div>
    </>
  )
}


