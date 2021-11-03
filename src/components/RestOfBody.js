import VidieCard from "./VidieCard";
import VideoDetails from "./VideoDetails";
import "./RestOfBody.css"

import { BrowserRouter, Route } from "react-router-dom";


function RestOfBody(){

    return <div className="main">
        <Route exact path="/" component={VidieCard} />
        <Route exact path="/VideoDetails/:id" component={VideoDetails} />
        
    </div>
        
}


export default RestOfBody;


