import { TOKEN } from "../ActionTypes"


const initialState=''
const Token=(state,action)=>{
    state=state||localStorage.getItem('token')||initialState
    switch (action.type) {
        case TOKEN.LOGIN:
            localStorage.setItem('token',action.payload)
            return action.payload
        case TOKEN.LOGOUT:
            localStorage.removeItem('token')
            return ''
        default:
            return state
    }
}
export default Token