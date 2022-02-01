import Logo from '../assets/logo.png'

export default function Navigation() {
  return (
    <div class="relative px-12 text-white">
      <div class="h-16 flex justify-between align-center w-full">
        <img src={Logo} class="z-10 cursor-pointer" alt="" />

        <div class="z-10 text-base flex items-center text-sm h-auto">
          <a href="#" class="mr-5">BSC Scan</a>
          <a href="#" class="mr-5">Polygon Scan</a>
          <a href="#" class="mr-5">Whitepaper</a>
          <button class="mr-2 text-sm button-linear-bg px-4 py-2 rounded-full">Coming Soon</button>
          <button class="text-sm button-linear-bg px-4 py-2 rounded-full">EN / MN</button>
        </div>
      </div>

      <div class="h-16 w-full flex items-center justify-center absolute top-0 left-0">
        <a href="#">Partners</a>
        <a href="#" class="px-4">Features</a>
        <a href="#">Governance</a>
      </div>
    </div>
  )
}

