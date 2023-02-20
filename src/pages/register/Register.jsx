import './register.scss';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Vivid Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, c onsectetur adipisicing elit. A aut
            consectetur adipisci velit ratione laboriosam beatae. Eligendi
            quisquam, tempore quae modi voluptate libero ab dignissimos illum
            cupiditate nesciunt quis non.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Register </h1>
          <form action=''>
            <input type='text' placeholder='Username' />
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='text' placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
