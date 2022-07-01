import { Trans, useTranslation } from "react-i18next";
import { useMedium } from "react-use-medium";
import { useEffect } from "preact/hooks";

import { Element } from "react-scroll";

export default function BlogSection() {
  const { data, isFetched } = useMedium("@ardmoney");
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   if(isFetched){
  //     console.log(data)
  //   }
  // },[isFetched,data]);

  return (
    <>
      <Element class='py-20 flex flex-col items-center' name='news'>
        <h1 class='pb-20 text-3xl font-semibold text-center'>Blog Posts</h1>

        {isFetched ? (
          <ul class='flex flex-col items-center sm:flex-row flex-wrap justify-between w-11/12 2xl:w-9/12'>
            {data.items.splice(0, 3).map((item, key) => {
              return (
                <li
                  class='w-11/12 text-center sm:text-left mb-20 sm:mb-0 sm:w-4/12 px-4'
                  key={key}
                >
                  <img src={item.thumbnail} class='w-full h-56' alt='' />
                  <h1 class='text-xl font-semibold my-5 sm:mt-5 sm:h-16'>
                    {item.title}
                  </h1>
                  <div
                    class='sm:h-32 my-2 text-gray-400 font-extralight font-xs'
                    dangerouslySetInnerHTML={{
                      __html: getOnlyFirstAndSecondSentence(item),
                    }}
                  ></div>
                  <a
                    href={item.link}
                    target='_blank'
                    class='font-light uppercase text-sm'
                  >
                    Read More {">"}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <div class=''>Couldn't Fetch Data From ArdMoney Medium.</div>
        )}
      </Element>
    </>
  );

  function getOnlyFirstAndSecondSentence(item) {
    return item.description.split("<p>")[1].split(".").splice(0, 2).join(".");
  }
}
