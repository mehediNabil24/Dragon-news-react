import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {userLogin, setUser} =useContext(AuthContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
        console.log(password,email);

        userLogin(email,password)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            alert(error.code)
        })
}

    
    return (
        <div className='flex flex-col justify-center  items-center p-10'>
            <h2 className='text-2xl font-semibold pb-2 text-center'>Login your account</h2>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control rounded-none">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p className='font-semibold text-center'> Don't have an account? <Link className='text-red-500' to={'/auth/register'}>Register</Link></p>
    </div>
            
        </div>
    );
};

export default Login;