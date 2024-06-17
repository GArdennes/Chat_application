import React from 'react';


const Login = () => {
  return (
    <div>
        <div>
            <h1>
                Login
                <span>ChatApp</span>
            </h1>

            <form>
                <div>
                    <label>
                        <span>Username</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Enter your username'
                    />
                </div>
                <div>
                    <label>
                        <span>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter your password'
                    />
                </div>
                    <a href='#'>
                        {"Don't have an account? Sign up"}
                    </a>
                <div>
                    <button>
                        {"Login"}
                    </button>
                </div>
            </form>

        </div>
    </div>
  );
};

export default Login;