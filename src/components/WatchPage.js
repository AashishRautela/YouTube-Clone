import React, { useState, useEffect } from 'react';
import "../style/WatchPageSuggestions.css"
import '../style/WatchPage.css';
import { useSearchParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import WatchPageButtonslist from './WatchPageButtonList';
import WatchPageSuggetions from './WatchPageSuggetions';
import useGetVideos from '../hooks/useGetVideos';
import { useDispatch} from 'react-redux';
import {closeMenu} from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [foundObject, setFoundObject] = useState(null);
  const videos = useGetVideos();
  console.log(videos[0]);
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(closeMenu());
  },[])

  useEffect(() => {
    // Find the video based on the searchParams
    function findObjectById(arr, idToFind) {
      return arr.find(obj => obj.id === idToFind);
    }

    const video = findObjectById(videos, searchParams.get('v'));

    if (video) {
      setFoundObject(video);
    }
  }, [searchParams, videos]);

  return (
    <div className='watch-page-container'>
      <div className='watch-page'>
        <iframe
          width='800'
          height='400'
          src={'https://www.youtube.com/embed/' + searchParams.get('v')}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        {foundObject && (
          <div>
            <h2 className='vdo-title'>{foundObject.snippet.title}</h2>
            <div className='vdo-details'>
              <div className='vdo-details-left'>
                <img src={foundObject.snippet.thumbnails.medium.url} alt="" />
                <ul>
                  <li className='left-chnl-name'>{foundObject.snippet.channelTitle.length > 10
                    ? foundObject.snippet.channelTitle.substring(0, 8) + '...'
                    : foundObject.snippet.channelTitle}<i class="fa fa-circle-check"></i></li>
                  <li className='left-chnl-subscribers'>{foundObject.statistics.commentCount.substring(0, 2)}k Subscribers</li>
                </ul>
              </div>
              <div className='vdo-details-mid'>
                <div className='join'>Join</div>
                <div className='subs'>
                  <i class="fa fa-bell"></i>Subscribe
                </div>
              </div>
              <div className='vdo-details-right'>
                <div className='like'>
                  <i class="fa fa-thumbs-up"></i> Like {foundObject.statistics.likeCount.substring(0, 2)}k | <i class="fa fa-thumbs-down"></i>Dislike
                </div>
                <div className='share'>
                  <i class="fa fa-share"></i>Share
                </div>
              </div>
            </div>
          </div>
        )}
        <CommentSection/>
      </div>
      <div className='watch-page-suggestions'>
        <WatchPageButtonslist />
        <WatchPageSuggetions/>
      </div>
    </div>
  );
};

export default WatchPage;

