import React, { useEffect,useState } from 'react'
import { GOOGLE_VIDEO_API } from '../constants';
import VideoCard from './VideoCard';
import "../style/VideoContainer.css";
import { Link } from 'react-router-dom';
import useGetVideos from "../hooks/useGetVideos"
const VideoContainer = () => {
  const videos=useGetVideos();
  return (
    <div className='video-container'>
      <div className='video-grid'>
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;