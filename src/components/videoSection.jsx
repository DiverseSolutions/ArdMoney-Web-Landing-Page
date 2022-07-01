import { Trans, useTranslation } from "react-i18next";

function VideoIntroText() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div class='pt-32 w-full relative z-20 flex justify-center'>
        <div class='text-center w-11/12 2xl:w-9/12'>
          <h2 class='text-2xl sm:text-4xl font-bold'>{t("core_concepts")}</h2>
          <p class='font-extralight text-sm sm:text-lg mt-4'>
            Төвлөрсөн бус санхүүгийн талаар анх удаа сонсож байна уу? Доорх
            бичлэгүүдтэй танилцаж ArdMoney төслийн дэвшүүлж буй санхүүгийн
            шинэчлэлтийн талаар суралцаарай.
          </p>
        </div>
      </div>
    </>
  );
}

function Videos() {
  return (
    <>
      <div class='flex justify-center'>
        <ul class='w-11/12 2xl:w-9/12 my-32 flex flex-col sm:flex-row items-center sm:items-start justify-around'>
          <li className='mb-8 sm:m-0'>
            <h1 class='text-center font-semibold text-lg mb-3'>ArdMoney</h1>
            <iframe
              class='w-96 h-72 rounded-lg'
              src='https://www.youtube.com/embed/Wfc6AJVA8O4'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture '
              allowfullscreen=''
            ></iframe>
          </li>

          <li className='mb-8 sm:m-0'>
            <h1 class='text-center font-semibold text-lg mb-3'>DEX</h1>
            <iframe
              class='w-96 h-72 rounded-lg'
              src='https://www.youtube.com/embed/3HESogLqS2Q'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture '
              allowfullscreen=''
            ></iframe>
          </li>

          <li className='mb-0 sm:m-0'>
            <h1 class='text-center font-semibold text-lg mb-3'>DAO</h1>
            <iframe
              class='w-96 h-72 rounded-lg'
              src='https://www.youtube.com/embed/0HMA_y4V_Qo'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture '
              allowfullscreen=''
            ></iframe>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function VideoSection() {
  return (
    <>
      <VideoIntroText />
      <Videos />
    </>
  );
}
