
import { HomeScreenImage } from './../ActionTypes/index';
const initialState={}
const SelectedImage=(state,action)=>{
    state=state||initialState
    switch (action.type) {
        case HomeScreenImage.selecteImage:
            return {...action.payload}
        default:
            return state
    }

}
export default SelectedImage