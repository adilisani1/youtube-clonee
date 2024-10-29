import { useEffect, useState } from "react"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from './Videos';
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchingSearch = async () => {
      try {

        const searchData = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        setVideos(searchData?.items)
      }
      catch (err) {
        console.error("An error occurred:", err);
      }
    }

    fetchingSearch()
  }, [searchTerm])

  return (
    <div>
      <div className=" ml-6 mt-5">
        <h2 className='text-2xl font-bold font-roboto pb-2'>Search Results for <span className=' text-red-500'>{searchTerm}</span> videos</h2>
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default SearchFeed