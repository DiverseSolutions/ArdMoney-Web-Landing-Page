import IntroBannerPicture from '../assets/introBannerPicture.png';

function IntroText(){
  return (
    <>
      <div class="text-center m-0 p-0">
        <h3 class="text-lg">Mongolia’s First DAO</h3>
        <div class="mt-4 mb-12 font-bold">
          <h1 class="text-7xl">Bringing True</h1>
          <h1 class="text-7xl mt-1">Permissionless System</h1>
        </div>

        <div class="inline font-bold">
          <a href="#" class="inline-block bg-polygon w-64 rounded py-3 mr-5">Polygon</a>
          <a href="#" class="inline-block bg-bsc w-64 rounded py-3">Binance Smart Chain</a>
        </div>
      </div>
    </>
  )
}

function IntroBanner(){
  return (
    <>
      <div class="w-full flex justify-center mt-24">
        <div class="rounded-lg w-9/12 px-16 intro-banner-linear-bg flex justify-around items-center">
          <div>
            <h2 class="text-6xl font-bold">Санхүүгийн оролцооны</h2>
            <h2 class="text-6xl font-bold">шинэ эрин үе</h2>
            <p class="mt-4">АрдМааний нь санхүүгийн шинэ тогтолцоог бий болгох юм.</p>
          </div>
          <div>
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
      <div class="pt-20 w-full flex justify-center">
        <div class="text-center w-8/12">
          <h2 class="text-3xl font-bold">Lorem Ipsum Lorem Ipsum</h2>
          <p class="font-extralight mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
        </div>
      </div>
    </>
  )
}





export default function introSection() {
  return (
    <>
      <div class="bg-primary py-20 text-white">
        <IntroText />
        <IntroBanner />
        <IntroEndingText />
      </div>
    </>
  )
}


