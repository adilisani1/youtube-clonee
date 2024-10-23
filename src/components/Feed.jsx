import SideBar from './Sidebar'
import Videos from './Videos';

const Feed = () => {
  return (

    <div className=" flex flex-col md:flex-row">
      <div className=' border-r border-gray-300 p-5 md:h-[92vh] h-auto  '>
        <SideBar />
      </div>

      <div className=' flex-[2] h-[90vh] overflow-y-scroll scrollbar-hide  p-4 '>
        <h4 className='text-xl font-medium pb-4'>New <span className=' text-red-500'>videos</span></h4>
        <Videos />
      </div>
    </div>

  )
}

export default Feed