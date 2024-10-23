import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      </Router>
    </>

  );
}

export default App;
