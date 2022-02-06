import Logo from '../assets/logo.png'
import DiscordIcon from '../assets/discordIcon.png'
import TelegramIcon from '../assets/telegramIcon.png'

export default function Footer() {
  return (
    <div>
      <div class="mt-24 py-4 flex bg-primary-mini justify-center w-full">
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

