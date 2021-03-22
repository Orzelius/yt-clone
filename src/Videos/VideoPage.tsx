import * as React from "react";
import Video from "./Video";
import image from "../assets/techlinked.jpg";
import thumb from "../assets/thumb.webp";

const video = (
  <div className=" px-2 pt-6 pb-8" style={{flex: '350px', maxWidth: "450px"}}>
    <Video
      age="1 日前"
      channel="TechLinked"
      channelImg={image}
      length="6:42"
      thumbnail={thumb}
      title="Intel's GPU: The Hunt Begins..."
      views="46万 回視聴"
      verrifiedChannel={false}
    />
  </div>
);
const videos = [video];
for (let i = 0; i < 20; i++) {
  videos.push(video);
}
const VideoPage: React.FC = () => <div className="flex flex-wrap justify-center px-4">{videos}</div>;

export default VideoPage;
