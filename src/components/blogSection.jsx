import { useMedium } from "react-use-medium";
import { useEffect } from 'preact/hooks';


export default function BlogSection() {
  const { data, isFetched } = useMedium("@ardmoney");

  // useEffect(() => {
  //   if(isFetched){
  //     console.log(data)
  //   }
  // },[isFetched,data]);

  return (
    <>
      <div class="py-24 flex flex-col items-center">
        <h1 class="pb-24 text-3xl font-semibold text-center">Blog Posts</h1>

        { isFetched ? (
          <ul class="flex flex-wrap justify-between w-9/12">
            {
              data.items.splice(0,3).map((item,key) => {
                return (
                  <li class="w-4/12 px-4" key={key}>
                    <img src={item.thumbnail} class="" alt="" />
                    <h1 class="text-xl font-semibold mt-5 h-16">{item.title}</h1>
                    <div class="h-32 my-2 text-gray-400 font-extralight font-xs" dangerouslySetInnerHTML={{ __html: item.description.split('<p>')[1] }}></div>
                    <a href={item.link} target="_blank" class="font-light uppercase text-sm">Read More ></a>
                  </li>
                )
              })
            }
          </ul>
        ) : (
          <div class="">
            Couldn't Fetch Data From ArdMoney Medium.
          </div>
        ) }
      </div>
    </>
  )
}

