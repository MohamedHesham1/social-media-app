import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut
            consectetur adipisci velit ratione laboriosam beatae. Eligendi
            quisquam, tempore quae modi voluptate libero ab dignissimos illum
            cupiditate nesciunt quis non.
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className='right'>
          <h1>Login </h1>
          <form action=''>
            <input type='text' placeholder='Username' />
            <input type='text' placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
