import { useState,useEffect } from "react";
import { GOOGLE_VIDEO_API } from "../constants";
const useGetVideos=()=>{
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(GOOGLE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
}
export default useGetVideos;