import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex flex-col justify-center  items-center p-10'>
            <h2 className='text-2xl font-semibold pb-2 text-center'>Login your account</h2>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
      <form className="card-body ">
        <div className="form-control rounded-none">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control rounded-none">
          <label className="label">
            <span className="label-text">Photo </span>
          </label>
          <input type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control rounded-none">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className='font-semibold text-center'> Already have an account? <Link className='text-red-500' to={'/auth/login'}>Login</Link></p>
    </div>
            
        </div>
    );
};

export default Register;