import featureDaoImg from '../assets/feature-dao.png'
import featureDefiImg from '../assets/feature-defi.png'
import featureDexImg from '../assets/feature-dex.png'


export default function FeaturesSection() {
  return (
    <>
      <div class="w-full flex relative z-20 justify-center">
        <div class="rounded-lg bg-primary-mini py-8 w-9/12 px-8 flex justify-around items-center">
          <ul class="flex flex-row items-center">
            <li class="mr-3 flex-grow">
              <h1 class="text-4xl font-bold mb-12">AрдМааний</h1>
              <h2 class="font-extralight">АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO протокол юм.</h2>
            </li>

            <li class="flex flex-col rounded-lg px-5 pt-16 pb-10 justify-start feature-card-linear-defi-bg self-stretch basis-8/12">
              <img src={featureDefiImg} class="w-32 h-32" alt="ardmoney-feature-defi" />
              <h2 class="text-3xl font-semibold mb-3 mt-10">DEFI</h2>
              <p class="font-extralight mb-2">Крипто хөрөнгийг хадгалж, зээлэх боломжтой боллоо.</p>
              <p class="font-extralight text-sm">АрдМааний протоколыг ашиглан, хэрэглэгчид өөрийн хөрөнгөө өндөр хүүтэйгээр хадгалан бага хүүтэй зээл авах боломжтой.</p>
            </li>

            <li class="flex flex-col rounded-lg px-5 pt-16 pb-10 justify-start feature-card-linear-dex-bg mx-5 self-stretch basis-8/12">
              <img src={featureDexImg} class="w-32 h-32" alt="ardmoney-feature-dex" />
              <h2 class="text-3xl font-semibold mb-3 mt-10">DEX</h2>
              <p class="font-extralight mb-2">Таны бирж таны гарт.</p>
              <p class="font-extralight text-sm">DEX буюу төвлөрсөн бус бирж нь автоматжуулсан ухаалаг гэрээнд тулгуурлан дундын зуучлагчгүйгээр арилжаа хийх боломжийг олгоно.</p>
            </li>

            <li class="flex flex-col rounded-lg px-5 pt-16 pb-10 justify-start feature-card-linear-dao-bg self-stretch basis-8/12">
              <img src={featureDaoImg} class="w-32 h-32" alt="ardmoney-feature-dao" />
              <h2 class="text-3xl font-semibold mb-3 mt-10">DAO</h2>
              <p class="font-extralight mb-2">Шийдвэр гаргалт бүрд оролцоно.</p>
              <p class="font-extralight text-sm">АрдМааний үйл ажиллагаатай холбоотой дэвшүүлсэн санал нь олонхын саналаар хэрэгжинэ.</p>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}
