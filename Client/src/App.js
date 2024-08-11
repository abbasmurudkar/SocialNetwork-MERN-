import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Profile from './Components/Home/Profile';
import Signin from './Components/Home/Signin';
import Signup from './Components/Home/Signup';
import Createpost from './Components/Home/Createpost';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Createpost />} />
          {/* <Route path="*" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
