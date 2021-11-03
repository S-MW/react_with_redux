const initialState = {
    videos: [],
    // watchLater : []
};

const videosReducer = (state = initialState, {type , payload}) => {

    switch (type) {
        case "SET_VIDEOS":
            return{
                videos:payload,
                // هنا نرجع القيمة القديمة , بدال ما في كل مره يصفرها لو كان فيها قيمة
                // watchLater: state.watchLater, 
            }
            break;
    
        default:
            return state;
    }
}

export default videosReducer;