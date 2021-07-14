
import { HomeScreenImage } from './../ActionTypes/index';
const HomeScreen={
    selectedImage:(data)=>(dispatch)=>{
        dispatch({
            type:HomeScreenImage.selecteImage,
            payload:data
        })
    },
    Gone:()=>(dispatch)=>{
        dispatch({
            type:HomeScreenImage.gone
        })
    }
}
export default HomeScreen