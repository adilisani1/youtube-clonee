import { categories } from "../utils/constant"

const SideBar = () => {
  return (
    <div className='flex flex-row md:flex-col overflow-y-auto h-full gap-6 w-full'>
      {
        categories.map((item, idx) => (
          <button className="flex items-center gap-3 px-5 py-2 text-black rounded-full hover:bg-rose-500 hover:text-white group" key={idx}>
            <span className="text-rose-500 text-2xl group-hover:text-white">
              <item.icon />
            </span>
            <p className="truncate">{item.name}</p>
          </button>
        ))
      }
    </div>
  )
}

export default SideBar;
