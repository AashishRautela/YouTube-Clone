 import React from 'react';
 import "../style/WatchPageSuggestions.css";
 import useGetVideos from '../hooks/useGetVideos';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const WatchPageSuggetions = () => {
  const [searchParams] = useSearchParams();


  const videos = useGetVideos();
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  const maxTitleLength = 40;
  return (
    <div>
      {videos.map((video) => {
        const { snippet } = video;
        const { channelTitle, title, thumbnails } = snippet;
  
        return (
          <Link key={video.id} to={"/watch?v="+video.id}>
          <div key={video.id} className='suggetion-videos'>
            <div className='suggetion-video-thumbnail'> 
              <img src={thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className='suggetion-video-details'>  
              <h5 className='suggetion-video-title'>{truncateTitle(title, maxTitleLength)}</h5>
              <h5 className='suggetion-video-channel-name'>{channelTitle}</h5>
              <div>
                <h5>{Math.floor(Math.random() * (100 - 10) + 10)}M Views</h5>
                <h5>{Math.floor(Math.random() * (100 - 10) + 10)} Days Ago</h5>
              </div>
            </div>
          </div>
          </Link>
          
        );
      })}
    </div>
  );
}

export default WatchPageSuggetions;
