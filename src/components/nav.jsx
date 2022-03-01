import Logo from '../assets/logo.png'
import NavBurgerIcon from '../assets/navBurgerIcon.png'

import constants from '../utility/constants.js'

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Navigation() {

  return (
    <div class="relative px-6 sm:px-12 sm:pt-0 md:pt-2 text-white">

      <div class="h-16 flex justify-center md:justify-between items-center w-full">
        <a href="#">
          <img src={Logo} class="w-32 h-32 md:w-20 md:h-20 z-10 cursor-pointer" alt="" />
        </a>
        {/* <a href="#" class="sm:hidden"> */}
        {/*   <img src={NavBurgerIcon} class="" alt="" /> */}
        {/* </a> */}

        <div class="z-10 text-base hidden sm:flex items-center text-sm h-auto">
          <Link to="opportunities" class="mr-5 cursor-pointer 2xl:hidden">Боломжууд</Link>
          <Link to="features" class="mr-5 cursor-pointer 2xl:hidden">Онцлог</Link>
          <Link to="news" class="mr-5 cursor-pointer 2xl:hidden">Мэдээлэл</Link>

          <a href={constants.BSC_ADDRESS} class="mr-5">BSC Scan</a>
          <a href={constants.POLYGON_ADDRESS} class="mr-5">Polygon Scan</a>
          <a href="#" class="mr-5">Whitepaper</a>
          {/* <button class="mr-2 text-sm button-linear-bg px-4 py-2 rounded-full">Тун удахгүй</button> */}
          {/* <button class="text-sm button-linear-bg px-4 py-2 rounded-full">EN / MN</button> */}
        </div>
      </div>

      <div class="md:pt-5 h-16 w-full items-center justify-center absolute top-0 left-0 hidden 2xl:flex">
        <Link to="opportunities" class="cursor-pointer">Боломжууд</Link>
        <Link to="features" class="px-5 cursor-pointer">Онцлог</Link>
        <Link to="news" class="cursor-pointer">Мэдээлэл</Link>
      </div>
    </div>
  )
}

