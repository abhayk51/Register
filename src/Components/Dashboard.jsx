import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [flag, setFlag] = useState(false);
  const [label, setLabel] = useState('');
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  let list = JSON.parse(localStorage.getItem("List"));
  
  let editEmail = () => {
    setFlag(true);
    setLabel('Email');
    setInput(list[0].email);
  }

  let editPhone = () => {
    setFlag(true);
    setLabel('Phone');
    setInput(list[0].phone);
  }

  let editPass = () => {
    setFlag(true);
    setLabel('Password');
    setInput(list[0].pass);
  }

  if (!list.length){
    useEffect(()=>{
      navigate("/");
    })
  }

  if(list.length){
  return (
    <>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-md-4 bg-light rounded px-md-4 px-2 py-4">
        <h1 className='text-center text-success'>Dashboard</h1>
        <p className='d-flex justify-content-around mb-3'>
          <span className='h4 pt-4'>Hello <span className='h2 text-success'>{list[0].name}</span></span>
          <span><i class="bi bi-person-circle text-success" style={{fontSize:"4em"}}></i></span>
        </p>
        <p className='d-flex justify-content-between'>
          <span className=''>Email : <span className='text-success'>{list[0].email}</span></span>
          <span className=''><button className='btn btn-sm btn-success' onClick={editEmail}><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        <p className='d-flex justify-content-between'>
          <span className=''>Phone no. : <span className='text-success'>{list[0].phone}</span></span>
          <span className=''><button className='btn btn-sm btn-success' onClick={editPhone}><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        <p className='d-flex justify-content-between'>
          <span className=''>Password : <span className='text-success'>{list[0].pass}</span></span>
          <span className=''><button className='btn btn-sm btn-success' onClick={editPass}><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        {flag ? (
        <form action="" className='d-flex'>
          <label htmlFor="" className='form-label m-2'>{label}</label>
          <input
            type="text"
            className='form-control m-2'
            value={input}
            onChange={(e)=> setInput(e.target.value)}
          />
          <input type="submit" className='btn btn-sm btn-success m-2' value={"Update"}/>
        </form>) : null}
        </div>
      </div>
    </>
    );
  }else{
    return <></>
  }
}

export default Dashboard;