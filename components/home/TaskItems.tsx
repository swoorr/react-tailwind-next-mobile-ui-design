type taskProp = {
  title?: string;
  bg?: string;
};

export default function taskItems(props: taskProp) {
  const title = props.title;
  const bg = props.bg || "purple";

  return (
    <>
      <div
        className={`item h-[190px] saturate-200 rounded-2xl hover:shadow-md transition-all 
        duration-300 p-6 ${bg} bg-opacity-30`}
      >
        <span className="flex justify-between">
          <span className="text-xl font-semibold">{title}</span>
          <span className="bg-gray-700 text-white rounded-full px-5 leading-7 text-sm">
            6d
          </span>
        </span>

        <div className="team__members flex flex-col mt-4 gap-3">
          <div className="title text-gray-500 text-sm">Team members</div>
          <div className="avatars flex flex-row gap-2">
            <div className="avatars__item rounded bg-gray-300 p-1">👩‍💻</div>
            <div className="avatars__item rounded bg-gray-300 p-1">👩‍💻</div>
            <div className="avatars__item rounded bg-gray-300 p-1">👩‍💻</div>
          </div>
        </div>

        <div className="alt__info">
          <div className="flex justify-between">
            <span className="mt-4 flex gap-2 time__info opacity-50 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 24 24"
              >
                <g transform="rotate(-90 12 12)">
                  <path
                    fill="red"
                    d="M13 12.175V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3q0 .5.175.925q.175.425.525.775l2.125 2.125q.3.3.713.3q.412 0 .712-.3q.275-.3.275-.712q0-.413-.275-.688ZM12 4q-.425 0-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6t.713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4Zm8 8q0-.425-.288-.713Q19.425 11 19 11t-.712.287Q18 11.575 18 12t.288.712Q18.575 13 19 13t.712-.288Q20 12.425 20 12Zm-8 6q-.425 0-.712.288Q11 18.575 11 19t.288.712Q11.575 20 12 20t.713-.288Q13 19.425 13 19t-.287-.712Q12.425 18 12 18Zm-6-6q0-.425-.287-.713Q5.425 11 5 11t-.713.287Q4 11.575 4 12t.287.712Q4.575 13 5 13t.713-.288Q6 12.425 6 12Zm6 10q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                  />
                </g>
              </svg>
              <span>2:30 PM - 6:30 PM</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
