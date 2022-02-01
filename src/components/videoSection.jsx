
function VideoIntroText(){
  return (
    <>
      <div class="pt-32 w-full relative z-20 flex justify-center">
        <div class="text-center w-9/12">
          <h2 class="text-4xl font-bold">Суурь ойлголтууд</h2>
          <p class="font-extralight text-lg mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</p>
        </div>
      </div>
    </>
  )
}

function Videos(){
  return (
    <>
      <div class="flex justify-center">
        <ul class="w-9/12 my-32 flex justify-around">

          <li className="">
            <h1 class="text-center font-semibold text-lg mb-3">DAO & DEFI</h1>
            <iframe class="w-96 h-72 rounded-lg" src="https://www.youtube.com/embed/0HMA_y4V_Qo" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen=""></iframe>
          </li>

          <li className="">
            <h1 class="text-center font-semibold text-lg mb-3">DEX</h1>
            <iframe class="w-96 h-72 rounded-lg" src="https://www.youtube.com/embed/3HESogLqS2Q" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen=""></iframe>
          </li>

          <li className="">
            <h1 class="text-center font-semibold text-lg mb-3">ArdMoney</h1>
            <iframe class="w-96 h-72 rounded-lg" src="https://www.youtube.com/embed/Wfc6AJVA8O4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen=""></iframe>
          </li>

        </ul>
      </div>
    </>
  )
}

export default function VideoSection() {
  return (
    <>
      <VideoIntroText />
        <Videos />
    </>
  )
}

