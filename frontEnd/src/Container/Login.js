import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TOKEN } from '../Redux/ActionTypes';
import Token from './../Redux/Action/token';
import { useSelector } from 'react-redux';
import PATH from './../Config/webPath';

import {Redirect} from 'react-router-dom'
const Login = () => {
    const dispatch=useDispatch()
    const [err,setErr]=useState({email:'',password:'',msg:''})
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const TOKENS=useSelector(({Token})=>Token)
    
    const Submit=(e)=>{
        e.preventDefault()
        fetch('https://frptbackend.herokuapp.com/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(d=>d.json()).then(d=>{
            if(Object.keys(d.err).length>0){
                setErr((s)=>({...s,...d.err}))
            }
            else{
                setErr({email:'',password:'',msg:''})
                dispatch(Token.LOGIN(d.data[0]))

            }
        }).catch(e=>{
            dispatch(TOKEN.LOGOUT())
            console.log(e)
        })
    }
  return (
    <>
    {TOKENS.length===0?<div style={{width:'50vw',position: 'absolute',top: '50%',left:'50%',transform:'translate(-50%, -50%)'}}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'aqua'}}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e)=>{
                setEmail(e.target.value)
                setErr((s)=>({msg:''}))
            }}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{color:'aqua'}}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
                setErr((s)=>({msg:''}))
            }}
          />
          <div style={{color:'aqua',textAlign:'center'}}>{err.msg}</div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={Submit}>
          Submit
        </button>
      </form></div>:<Redirect to={PATH.HOME}></Redirect>}
    </>
  );
};
export default Login