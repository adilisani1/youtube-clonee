import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }

  };

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
          value={searchTerm}
          onKeyDown={(e) => e.key === 'Enter' && onHandleSubmit(e)}  
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <button className="text-gray-600 p-3 bg-gray-200" onClick={onHandleSubmit}>
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
