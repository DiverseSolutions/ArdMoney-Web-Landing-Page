export default function ArdMoneyFeaturesSection() {

  const liStyle = `w-5/12`;
  const cardTitleStyle = `text-2xl font-semibold mb-6`;
  const cardSubStyle = `font-light text-xs uppercase w-9/12`;

  return (
    <div class="ardMoney-features-bg w-full py-16 flex flex-col items-center">
      <h1 class="text-center font-bold text-4xl mb-12">АрдМааний онцлог</h1>

      <ul class="flex w-8/12 justify-between">
        <li class={liStyle}>
          <h2 class={cardTitleStyle} >Polygon</h2>
          <p class={cardSubStyle} >Polygon сүлжээ нь 1 секундэд 65.000 гүйлгээ батлах чадвартай. Энэ нь АрдМааний протокол хамгийн хурдан санхүүгийн үйлчилгээг үзүүлнэ гэсэн үг юм.</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle} >Олон сүлжээт</h2>
          <p class={cardSubStyle} >АрдМааний нь Polygon, Ethereum, Binance smart chain зэрэг сүлжээнүүдэд оршиж, сүлжээ хооронд чөлөөтэй шилжих боломжтой.</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle} >Нээлттэй</h2>
          <p class={cardSubStyle} >Монгол койнуудыг дэлхийн тавцанд гаргах DEX байх болно. Гадаад орны хөрөнгө оруулагчид Монгол блокчэйн төслүүдэд хөрөнгө оруулах хамгийн хурдан, хялбар зам байх болно.</p>
        </li>

        <li class={liStyle}>
          <h2 class={cardTitleStyle} >Төвлөрсөн бус</h2>
          <p class={cardSubStyle} >АрдМааний эзэмшигчид бүх шинэчлэлт, сайжруулалтанд саналаа өгч оролцох боломжтой.</p>
        </li>

      </ul>

    </div>
  )
}

