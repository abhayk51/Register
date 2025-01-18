import {useState} from 'react';
import React from 'react';
import Login from './Login';
import Register from './Register';

function LoginForm(){
  const [action, setaction] = useState('Login');
  return (
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-3 bg-light rounded px-5 py-4">
        {action==='Login'?<Login/>:<Register/>}
        <p className='text-center'>
          {action==='Login'?"Don't":'Already'} have an account?{"  "}
          <a className='text-success' href='#'
            onClick={()=>{setaction(action === 'Login'?'Signup':'Login')}}>
            {action==='Login'?'Signup':'Login'}
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm;