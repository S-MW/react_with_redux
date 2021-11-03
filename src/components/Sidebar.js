import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import "./Sidebar.css"



function Sidebar(){

    return <div className="sidenav">
    <a href="#about"><HomeIcon fontSize="large"/></a>
    <a href="#services"><ExploreIcon fontSize="large"/></a>
    <a href="#clients"><SubscriptionsIcon fontSize="large"/></a>
    <a href="#contact"><VideoLibraryIcon fontSize="large"/></a>
    </div>
        
}


export default Sidebar;


