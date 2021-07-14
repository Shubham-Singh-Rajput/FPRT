import { useHistory } from 'react-router-dom'
import PATH from './../Config/webPath';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Token from './../Redux/Action/token';

const NavBar=()=>{
    const history=useHistory()
    const TOKENS=useSelector(({Token})=>Token)
    const dispatch=useDispatch()
    const signup=()=>{
        history.push(PATH.SIGNUP)
    }
    const login=()=>{
        history.push(PATH.LOGIN)
    }
    return(
        <>
            <nav className="navbar navbar-light" style={{background:'#e3f2fd'}}>
            <form className="container-fluid justify-content-between">
            <button className="btn btn-outline-success me-2" type="button" onClick={()=>{history.push(PATH.HOME)}}>HOME</button>
            {TOKENS.length===0?<>
                
                <button className="btn btn-outline-success me-2" type="button" onClick={signup}>SIGNUP</button>
                <button className="btn btn-outline-success me-2" type="button" onClick={login}>LOGIN</button>
            </>:<>
            <button className="btn btn-outline-success me-2" type="button" onClick={()=>history.push(PATH.MYIMAGE)}>MY IMAGES</button>
                <button className="btn btn-outline-success me-2" type="button" onClick={()=>{dispatch(Token.LOGOUT())
                history.push(PATH.HOME)}}>LOGOUT</button>
            </>}
            </form>
            </nav>
        </>
    )

}
export default NavBar