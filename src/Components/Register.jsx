import React, { useState } from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../Schemas';
import { db } from '../firebase-config';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  name: "",
  phone: "",
  email: "",
  pass: "",
}

const Register = () => {
  const [users, setUsers] = useState()
  const navigate = useNavigate();

  const usersCollectionRef = collection(db, "register")

  const getUsers = async(values) => {
    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map((doc)=>({...doc.data()})))
    const el = users.filter((user) => {return user.phone === values.phone || user.email === values.email})
    el.length ? alert("User already exist") : createUser(values)
  }

  const createUser = async (val) => {
    await addDoc(usersCollectionRef, val)
    await alert("User Created")
    await navigate('/');
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, errors)=>{
      getUsers(values);
      console.log("Values - ",values, "Errors - ", errors) ;
    }
  });

  return (
    <>
      <h1 className='text-center text-success fw-bold'>Register</h1>
      <hr className='border border-4 border-success rounded mx-auto d-block w-25'/>
      <form action='' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p className='form-error text-danger'>{errors.name}</p> : null}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone no.</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name='phone'
            placeholder="Phone no."
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? <p className='form-error text-danger'>{errors.phone}</p> : null}
        </div>
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
          {errors.email && touched.email ? <p className='form-error text-danger'>{errors.email}</p> : null}
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
          {errors.pass && touched.pass ? <p className='form-error text-danger'>{errors.pass}</p> : null}
        </div>
        <div className="row d-flex justify-content-center mb-3">
          <button type='submit' className='btn btn-success btn-block fw-bold'>Register</button>
        </div>
      </form>
    </>
  );
}

export default Register;