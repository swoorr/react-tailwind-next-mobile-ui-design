import Image from "next/image";
import Layout from "@/components/layout";
import TaskItems from "@/components/home/TaskItems";

export default function Home() {
  const newLocal = "material-symbols:image-search-rounded text-white";
  return (
    <>
      <Layout>
        <div className="flex justify-between m-4">
          <input
            type="text"
            placeholder="🔍 Search..."
            className="rounded-full bg-gray-200 text-slate-600 transition-all delay-300 p-4 outline-none focus:shadow-lg shadow-emerald-300 w-4/5"
          />

          <button className="py-4 px-5 bg-gray-800 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 48 48"
            >
              <g transform="rotate(-90 24 24)">
                <g fill="white">
                  <path d="M16 32a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
                  <path
                    fill-rule="evenodd"
                    d="M24 22c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0V22.922c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1c.553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v8Zm13 18c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1c.553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v19ZM12 38c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-2.078c0-.526-.474-.922-1-.922Zm-1-7c0 .552.474 1 1.026 1c.553 0 .974-.448.974-1V7a1 1 0 1 0-2 0v24Z"
                    clip-rule="evenodd"
                  />
                  <path d="M28 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm12 11a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
                </g>
              </g>
            </svg>
          </button>
        </div>
        {/* FINISH SEARCH AND FILTER */}

        <div className="categories m-4 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-slate-600">Categories</h2>
          <div className="categories__items flex flex-row gap-4">
            <div className="item w-1/2 h-[100px] bg-amber-100 rounded-2xl hover:shadow-lg transition-all duration-300 shadow-amber-500 p-4">
              <span className="flex flex-col">
                <span className="text-xl font-semibold">Mobile App</span>
                <span>10 Tasks</span>
              </span>
            </div>
            <div className="item w-1/2 h-[100px] bg-emerald-100 rounded-2xl hover:shadow-lg transition-all duration-300 shadow-amber-500 p-4">
              <span className="flex flex-col">
                <span className="text-xl font-semibold">Web Site</span>
                <span>05 Tasks</span>
              </span>
            </div>
          </div>
        </div>
        {/* FINISH CATEGORIES */}

        <div className="tasks m-4 flex flex-col gap-5">
          <span className="flex justify-between">
            <h2 className="text-2xl font-bold text-slate-600">Ongoing tasks</h2>
            <a
              href="#"
              className="text-gray-400 hover:underline text-sm place-self-end"
            >
              See all
            </a>
          </span>

          <div className="tasks__item flex flex-col gap-4">
            <TaskItems bg="bg-slate-300" title='Wallet App Design' />
            <TaskItems bg="bg-emerald-300" title='Dashboard & Mobile App' />
            <TaskItems bg="bg-orange-300" title='Daily Projects' />
            
          </div>
        </div>
      </Layout>
    </>
  );
}
