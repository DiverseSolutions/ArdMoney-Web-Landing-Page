import Logo from '../assets/logo.png'
import NavBurgerIcon from '../assets/navBurgerIcon.png'

export default function Navigation() {
  return (
    <div class="relative px-6 pt-8 sm:px-12 sm:pt-0 text-white">

      <div class="h-16 flex justify-between items-center w-full">
        <a href="#">
          <img src={Logo} class="w-20 h-20 z-10 cursor-pointer" alt="" />
        </a>
        <a href="#" class="sm:hidden">
          <img src={NavBurgerIcon} class="" alt="" />
        </a>

        <div class="z-10 text-base hidden sm:flex items-center text-sm h-auto">
          <a href="#" class="mr-5 2xl:hidden">Partners</a>
          <a href="#" class="mr-5 2xl:hidden">Features</a>
          <a href="#" class="mr-5 2xl:hidden">Governance</a>

          <a href="#" class="mr-5">BSC Scan</a>
          <a href="#" class="mr-5">Polygon Scan</a>
          <a href="#" class="mr-5">Whitepaper</a>
          <button class="mr-2 text-sm button-linear-bg px-4 py-2 rounded-full">Coming Soon</button>
          <button class="text-sm button-linear-bg px-4 py-2 rounded-full">EN / MN</button>
        </div>
      </div>

      <div class="h-16 w-full items-center justify-center absolute top-0 left-0 hidden 2xl:flex">
        <a href="#">Partners</a>
        <a href="#" class="px-4">Features</a>
        <a href="#">Governance</a>
      </div>
    </div>
  )
}

