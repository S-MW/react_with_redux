import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../reducers/videos/actions"
import "./VidieCard.css"

function VidieCard()
{

    const dispatch = useDispatch();

    const state = useSelector((state) =>{
    return{
        listsss:state.videosReducer.videos,
    }
    });

    const showDetails = (e)=>{
        console.log(e.target.id)

    }

    
    const showVideos = ()=>{
        return state.listsss.map((element, index)=>{
                return <div  className="grid-item">
                                <img width="100%" src={element.snippet.thumbnails.high["url"]} />
                                <p>{element.snippet["title"]}</p>
                                <button id={element.id["videoId"]} onClick={showDetails}>Show Details</button>
                        </div>
        })
    }



    return <div className="grid-container">
            {console.log(state.listsss)}
            {showVideos()}
            </div>
}

export default VidieCard;