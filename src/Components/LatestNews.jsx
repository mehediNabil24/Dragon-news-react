import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-red-400 text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={50} className="flex gap-2">
        <Link to={"/news"}>This is news Link</Link>
        <Link to={"/news"}>This is news Link</Link>
        <Link to={"/news"}>This is news Link</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
