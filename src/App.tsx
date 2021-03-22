import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Sidebar from "./Sidebar/Sidebar";
import useWindowDimensions from "./useDimensions";
import VideoPage from "./Videos/VideoPage";
import PerfectScrollbar from 'react-perfect-scrollbar'

const App: React.FC = () => (
  <div>
    <div className="fixed top-0 w-full z-10">
      <Nav></Nav>
    </div>
    <div className="hidden sm:inline-block overflow-y-scroll h-full fixed z-10 left-0 mt-14 bg-yt-gray">
      <Sidebar />
      <span></span>
    </div>
    <div className="inline-block sm:ml-64 mt-14 sm:pl-3 ">
      <VideoPage />
    </div>
  </div>
);

export default App;
