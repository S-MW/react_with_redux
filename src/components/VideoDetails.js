import {useParams} from 'react-router-dom'

function VideoDetails(){
    const {id} = useParams()
    return <h1>{id}</h1>
}

export default VideoDetails;