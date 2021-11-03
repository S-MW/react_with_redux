import { useDispatch, useSelector } from "react-redux";


function WatchLaterVideos(){

    const state = useSelector((state) =>{
        return{
            VideosList:state.videosReducer.watchLater,
        }
        });

    return <div>
                <h1>WatchLaterVideos</h1>
                
                {console.log("--VideosList--")}
                {console.log(state.VideosList)}
                {console.log("--VideosList--")}
            </div> 
}

export default WatchLaterVideos;