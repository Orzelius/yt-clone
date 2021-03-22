import * as React from "react";

const SidebarItem: React.FC<{ text: string; svgPath: string[] }> = (p) => (
  <button className="flex align-baseline w-full hover:bg-yt-border">
    <div className="h-10 inline-block ml-6 mr-6">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="h-full w-7"
      >
        <g>
          {p.svgPath.map((path) => (
            <path style={{ fill: "#909090" }} d={path}></path>
          ))}
        </g>
      </svg>
    </div>
    <span className="text-white mt-2">{p.text}</span>
  </button>
);

export const Channel: React.FC<{ text: string; imgSrc: string }> = (p) => (
  <button className="flex w-full border-yt-border pt-3 hover:bg-yt-border">
    <div className="h-10 inline-block ml-6 mr-6">
      <img className="h-7 w-7 rounded-full" src={p.imgSrc}></img>
    </div>
    <span className="text-white ">{p.text}</span>
  </button>
);

export default SidebarItem;
