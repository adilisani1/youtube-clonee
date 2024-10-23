import { categories } from "../utils/constant";

const SideBar = ({ selectedCat, setSelectedCat }) => {
  return (
    <div className='flex flex-row md:flex-col overflow-y-auto h-full gap-6 w-full'>
      {
        categories.map((category, idx) => (
          <button
            onClick={() => setSelectedCat(category.name)}
            className={`flex items-center gap-3 px-5 py-2 rounded-full text-black hover:bg-rose-500 hover:text-white group ${selectedCat === category.name ? 'bg-rose-500 text-white' : ''}`}
            key={idx}
          >
            <span className={`text-rose-500 text-2xl group-hover:text-white ${selectedCat === category.name ? 'text-white' : ''}`}>
              <category.icon />
            </span>
            <p className="truncate">{category.name}</p>
          </button>
        ))
      }
    </div>
  );
}

export default SideBar;
