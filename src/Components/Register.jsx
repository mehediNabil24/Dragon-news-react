import { Link, } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
  const { createNewUser } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log(name, email, photo, password);

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
       // Navigate to a specific route after success
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h2 className="text-2xl font-semibold pb-2 text-center">Register your account</h2>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control rounded-none">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control rounded-none">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
              required
            />
          </div>
          <div className="form-control rounded-none">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral rounded-none">
              Register
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already have an account?{' '}
          <Link className="text-red-500" to={'/auth/login'}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
