const initialState = {
    videos: [],
};

const videosReducer = (state = initialState, {type , payload}) => {

    switch (type) {
        case "SET_VIDEOS":
            // return{
            //     
            // }
            break;
    
        default:
            return state;
    }
}

export default videosReducer;