import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "./reducers/videos/actions";

import './App.css';

function App() {

  const dispatch = useDispatch();

  const state = useSelector((state) =>{
    console.log(state)
    return{
      listsss:state.videosReducer.videos,
    }
  });


  let API_KEY = "AIzaSyDZ7Yl2nzKPmfVwPDb3y4YtafVf_SwqD1w"
  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=${API_KEY}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>console.log(err))
  })

  return (
    <div>
      <h1>App component!!</h1>

    </div>
  );
}

export default App;
