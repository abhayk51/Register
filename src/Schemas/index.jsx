import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  phone: Yup.string().min(10).max(10).required("Please enter phone no."),
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Please enter your password")
})

const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Please enter your password")
})

export {signUpSchema, loginSchema}