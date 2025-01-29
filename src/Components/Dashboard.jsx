import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  let list = JSON.parse(localStorage.getItem("List"));
  // if(list){
    //   return (list = JSON.parse(localStorage.getItem("List")));
    // }else {
  //   return [];
  // }
  if (list.length){
    console.log(list[0].name);
  }else{
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
          <span className=''><button className='btn btn-sm btn-success'><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        <p className='d-flex justify-content-between'>
          <span className=''>Phone no. : <span className='text-success'>{list[0].phone}</span></span>
          <span className=''><button className='btn btn-sm btn-success'><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        <p className='d-flex justify-content-between'>
          <span className=''>Password : <span className='text-success'>{list[0].pass}</span></span>
          <span className=''><button className='btn btn-sm btn-success'><i class="bi bi-pencil-square fs-5"></i></button></span>
        </p>
        </div>
      </div>
    </>
    );
  }else{
    return <></>
  }
}

export default Dashboard;