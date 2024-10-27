import { useEffect, useState } from 'react';
import SideBar from './Sidebar'
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCat, setSelectedCat] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`)
      .then((data) => {
        setVideos(data.items);
      });
  }, [selectedCat]);

  return (

    <div className=" flex flex-col md:flex-row">
      <div className=' border-r border-gray-300 p-5 md:h-[92vh] h-auto  '>
        <SideBar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      </div>

      <div className=' flex-[2] h-[90vh] overflow-y-scroll scrollbar-hide  p-4 '>
        <h4 className='text-xl font-medium pb-4'>{selectedCat} <span className=' text-red-500'>videos</span></h4>
        <Videos videos={videos} />

      </div>
    </div>

  )
}

export default Feed