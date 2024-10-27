import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 pt-2 py-3 sticky top-0 bg-white shadow-sm'>
      <Link to="/" className="flex items-center">
        <img className="w-14" src='/youtube-logo.png' alt='logo' />
        <h4 className="font-roboto text-xl">YouTube</h4>
      </Link>

      <div className="flex items-center border rounded-full overflow-hidden">
        <input
          className='  outline-none px-4  bg-transparent md:w-96'
          placeholder='Search...'
        />
        <button className="text-gray-600 p-3 bg-gray-200">
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
