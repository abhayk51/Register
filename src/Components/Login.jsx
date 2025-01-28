import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../Schemas';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const initialValues = {
  email: "",
  pass: ""
}


const Login = () => {
  const [users, setUsers] = useState('');
  const usersCollectionRef = collection(db, "register")
  const [list, setList] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem('List', JSON.stringify(list))
  }, [list])

  const getUsers = async(values) => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc)=>({...doc.data()})));
    const el = users.filter((user) => {return user.email === values.email && user.pass === values.pass})
    el.length ? setList(el) : null

    el.length ? navigate("/dashboard") : alert("User not found") ;
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      getUsers(values);
      console.log(values);
    }
  })

  return (
    <>
      <h1 className='text-center text-success fw-bold'>Login</h1>
      <hr className='border border-4 border-success rounded mx-auto d-block w-25'/>
      <form action='' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            placeholder="mail@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            name='pass'
            placeholder="Password"
            value={values.pass}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.pass && touched.pass ? <p className='text-danger'>{errors.pass}</p> : null}
        </div>
        <p className='mb-3 d-flex justify-content-end'><a href='' className='text-success'>forgot password?</a></p>
        <div className="row d-flex justify-content-center mb-3">
          <button type='submit' className='btn btn-success btn-block fw-bold'>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;