import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

import React, { useEffect } from 'react';
import 'css-doodle';
import Home from './pages/home/Home';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.39.2/css-doodle.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
    <css-doodle style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      {`
        :doodle {
          @grid: 20x20;
          @size: 100vmax;
          grid-gap: 1px;
        }
        background-color: hsla(@r(360), 85%, @r(70%, 90%), @r(.9));
        transform: scale(@rand(.1, .9));
      `}
    </css-doodle>
    <div className='p-4 h-screen flex items-center justify-center'>
        {/*<SignUp/>*/}
        <Home/>
    </div>
      </>
    
  );
}

export default App
