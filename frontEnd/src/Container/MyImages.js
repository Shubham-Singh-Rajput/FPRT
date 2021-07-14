import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PATH from './../Config/webPath';
import { useState } from 'react';

const MyImages = () => {
    const TOKENS=useSelector(({Token})=>Token)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://frptbackend.herokuapp.com/myimages',{
            headers:{
                'token':TOKENS,
                'Content-Type':'application/json'
            },
            method:'POST'
        }).then(d=>d.json()).then(d=>{
            if(Object.keys(d.err).length===0){
                setData(d.data)
            }
        })
    },[TOKENS])

  return (
    <>
    {TOKENS.length>0?
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',margin:'3%'}}>
    {data.map((i,key)=>{
    return(<div key={key}>
     <div className="card" style={{ width: "300px" }}>
     <img className="card-img-top" src={i.imageUrl} height="200px" alt="iamges"></img>
     <div className="card-body">
       <p className="card-text">
        TITLE:{i.title}
       </p>
       <p className="card-text">
        DESCRIPTION:{i.description}
       </p>
     </div>
   </div>
   </div>)
    })}
 </div>:<Redirect to={PATH.HOME}></Redirect>
}
    </>
  );
};
export default MyImages