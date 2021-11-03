const initialState = {
    videos: [],
    // watchLater : []
};

const videosReducer = (state = initialState, {type , payload}) => {

    switch (type) {
        case "SET_VIDEOS":
            return{
                videos:payload,
            }
            break;
    
        default:
            return state;
    }
}

export default videosReducer;