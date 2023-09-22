import React from 'react';
import "../style/VideoCard.css";
import useDate from "../hooks/useDate";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  const formattedPublishedDate = useDate(publishedAt);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  const maxTitleLength = 45;
  return (
    <div className='video-container'>
      <div className='video-card'>
        <img src={thumbnails.medium.url} alt="thumbnail" />
        <div className='video-details'>
          <img src={thumbnails.medium.url} alt="chnlpic" />
          <div className='video-info'>
            <ul>
              <li className='video-title'>{truncateTitle(title, maxTitleLength)}</li>
              <li className='channelname'>{channelTitle}</li>
              <li>
                <span className='views'>{viewCount} views</span>
                <span className='date'>&nbsp;| {formattedPublishedDate}</span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
