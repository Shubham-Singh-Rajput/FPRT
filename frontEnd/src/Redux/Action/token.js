import { TOKEN } from "../ActionTypes"
const Token={
    LOGIN:(data)=>(dispatch)=>{
        dispatch({
            type:TOKEN.LOGIN,
            payload:data
        })
    },
    LOGOUT:()=>(dispatch)=>{
        dispatch({
            type:TOKEN.LOGOUT,
        })
    }
}
export default Token