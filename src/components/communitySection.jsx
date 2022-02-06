import arrowIcon from '../assets/arrowIcon.png'
import communityLogo from '../assets/communityLogo.png'

export default function CommunitySection() {
  return (
    <div>
      <div class="flex justify-center w-full">
        <div class="py-16 flex rounded-lg w-9/12 bg-primary-mini">

          <div class="pl-20 basis-10/12 flex flex-col justify-center">
            <h1 class="text-5xl font-bold">Join our Community</h1>
            <p class="text-2xl text-gray-600 my-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

            <div class="flex justify-between">
              <a href="#" class="inline-block px-12 justify-center py-3 rounded-lg flex text-xl community-button-linear-bg items-center">
                <span class="">Join telegram</span>
                <div class="ml-3"><img src={arrowIcon} alt="arrowIcon" /></div>
              </a>
              <a href="#" class="inline-block px-12 justify-center py-3 rounded-lg flex text-xl community-button-linear-bg items-center">
                <span class="">Join discord</span>
                <div class="ml-3"><img src={arrowIcon} alt="arrowIcon" /></div>
              </a>
            </div>

          </div>
          <div class="flex w-full justify-center items-center">
            <img src={communityLogo} class="ml-12" alt="communityLogo" />
          </div>
        </div>
      </div>
    </div>
  )
}

