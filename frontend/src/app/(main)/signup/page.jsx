'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Name pura likho').required('Naam nhi hai kya?'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required')
    .min(6, 'Too small').matches(/[A-Z]/,'must include uppercase letter')
    .matches(/[0-9]/,'must include numbers').matches(/\W/,'must include specila charector').matches(/[a-z]/,'must include lowercase letter'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Password is required')
});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send values to backend

      fetch('http://localhost:5000/user/add',{
        method:'POST',
        body: JSON.stringify(values),
        headers : {
          'Content-Type':'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if(response.status===200){
          toast.success('User Registered Successfully');
        }else{
          toast.error('User Registration Successfully')
        }
      }).catch((err) => {
        console.log(err);
        toast.error('User Registration failed')
      });
    },
    validationSchema: SignupSchema
  })

  return (
    <div className='ml-60'>
    <section className="vh-100 bg-primary-subtle md-100 ml-96">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h1 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h1>
                    <form onSubmit={signupForm.handleSubmit} >

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          class="form-control"
                          placeholder=""
                        />
                        {signupForm.touched.email && (
                          <small class="text-danger">{signupForm.errors.email}</small>
                        )}
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label col">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                          class="form-control"
                          placeholder=""
                        />
                        {signupForm.touched.name && (
                          <small class="text-danger">{signupForm.errors.name}</small>
                        )}
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          class="form-control"
                          placeholder=""
                        />
                        {signupForm.touched.password && (
                          <small class="text-danger">{signupForm.errors.password}</small>
                        )}
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.confirmPassword}
                          class="form-control"
                          placeholder=""
                        />
                        {signupForm.touched.confirmPassword && (
                          <small class="text-danger">{signupForm.errors.confirmPassword}</small>
                        )}
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>
                    <br />

                    <p>Already Registered? <Link href='/login' className='text-blue'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}

export default Signup;