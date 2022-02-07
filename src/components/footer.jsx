import Logo from '../assets/logo.png'
import DiscordIcon from '../assets/discordIcon.png'
import TelegramIcon from '../assets/telegramIcon.png'

import BigDiscordIcon from '../assets/BigDiscordIcon.png'
import BigTelegramIcon from '../assets/BigTelegramIcon.png'

export default function Footer() {
  return (
    <div>
      <div class="flex sm:hidden pt-12 pb-5 flex-col items-center">
        <img src={Logo} class="w-16 h-16" alt="" />
        <p>@Diverse Solutions 2020</p>
      </div>
      <div class="flex sm:hidden py-5 rounded-xl justify-center bg-primary-mini w-full">
        <div class="w-8/12 flex justify-around">
          <a href="#">
            <img src={BigTelegramIcon} class="w-12 h-12" alt="Telegram Icon" />
          </a>
          <a href="#">
            <img src={BigDiscordIcon} class="w-12 h-12" alt="Discord Icon" />
          </a>
          <a href="#">
            <img src={BigDiscordIcon} class="w-12 h-12" alt="Discord Icon" />
          </a>
        </div>
      </div>

      <div class="hidden sm:flex mt-24 py-4 bg-primary-mini justify-center w-full">
        <div class="flex w-8/12 items-center justify-around">
          <img src={Logo} class="w-12 h-12" alt="" />
          <a href="#">
            <img src={TelegramIcon} class="w-7 h-7" alt="Telegram Icon" />
          </a>
          <a href="#">
            <img src={DiscordIcon} class="w-7 h-7" alt="Discord Icon" />
          </a>
          <a href="#">
            <img src={DiscordIcon} class="w-7 h-7" alt="Discord Icon" />
          </a>
          <p>@Diverse Solutions 2020</p>
        </div>
      </div>
    </div>
  )
}

