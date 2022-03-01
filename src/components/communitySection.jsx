import arrowIcon from '../assets/arrowIcon.png'
import communityLogo from '../assets/communityLogo.png'

export default function CommunitySection() {
  return (
    <div>
      <div class="flex font-roboto justify-center w-full">
        <div class="py-12 flex flex-col sm:flex-row rounded-lg w-11/12 2xl:w-9/12 bg-primary-mini">

          <div class="px-8 text-center sm:text-left sm:pl-20 basis-10/12 flex flex-col justify-around order-2 sm:order-1">
            <h1 class="text-2xl sm:text-5xl font-bold">Бидэнтэй Нэгд!</h1>
            <p class="text-md sm:text-2xl md:text-lg my-5 sm:m-0 text-gray-400">ArdMoney төслийн талаарх хамгийн шинэлэг мэдээлэл, зарлал аваад зогсохгүй, бусад ArdMoney эзэмшигчидтэй нэгд!</p>

            <div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
              <a href="#" class="inline-block mb-5 sm:m-0 w-52 sm:w-auto text-md sm:px-11 justify-center py-3 rounded-lg flex text-xl community-button-linear-bg items-center">
                <span class="">Telegram</span>
                <div class="ml-3"><img src={arrowIcon} alt="arrowIcon" /></div>
              </a>
              <a href="#" class="inline-block md:ml-4 w-52 sm:w-auto sm:px-12 justify-center py-3 rounded-lg flex text-xl community-button-linear-bg items-center">
                <span class="">Discord</span>
                <div class="ml-3"><img src={arrowIcon} alt="arrowIcon" /></div>
              </a>
            </div>

          </div>
          <div class="flex w-full justify-center items-center order-1 sm:order-2 mb-8 sm:mb-0">
            <img src={communityLogo} class="m-0 sm:ml-12" alt="communityLogo" />
          </div>
        </div>
      </div>
    </div>
  )
}

