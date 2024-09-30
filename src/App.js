import React from 'react';
// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import AuthForm from './Pages/AuthForm.js';
import Homepage from './Pages/Homepage.js';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Login' element={<AuthForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react'

//  function App() {
//   return (
//     <div>App</div>
//   )
// }

