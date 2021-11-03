import MenuIcon from '@mui/icons-material/Menu';

import "./Navbar.css"



function Navbar(){

    return <div className="navbarDiv">
            <MenuIcon className="MUI_icon" color="info" fontSize="large" />
            <div>searchbar</div>
            <div>your icons</div>
        </div>
}


export default Navbar;


