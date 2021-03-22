import * as React from "react";

const Video: React.FC<{
  title: string;
  channel: string;
  thumbnail: string;
  channelImg: string;
  views: string;
  age: string;
  length: string;
  verrifiedChannel: boolean;
}> = (p) => (
  <div className="">
    <div>
      <img src={p.thumbnail} alt={p.title} />
      <span className="relative text-white bg-black float-right text-sm bottom-8 p-0 pb-1 px-1 right-1">{p.length}</span>
    </div>
    <div>
      <div className="inline-block">
        <img src={p.channelImg} className="rounded-full h-10 mt-2" />
      </div>
      <div className="inline-block ml-3 mt-1 align-top">
        <p className="text-white">{p.title}</p>
        <p className="text-yt-text mt-1 text-sm">{p.channel}</p>
        <p className="text-yt-text text-sm -mt-1">
          {p.views} <b className="text-base">·</b> {p.age}
        </p>
      </div>
    </div>
  </div>
);

export default Video;
