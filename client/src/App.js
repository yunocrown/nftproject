// eslint-disable-next-line
import React , { useState , useEffect , useContext } from 'react';
import { Routes , Route , useLocation } from 'react-router-dom';
import './App.css';

import Loading from './components/UI/Loading/Loading.jsx';

import Home from "./components/Home/Home.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Explore from './components/Explore/Explore.jsx';
import VerifyNft from './components/VerifyNft/VerifyNft.jsx';
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 1800);

  return(
    <>
      <div className='App'>
        { loading? (
          <Loading />
        ):(
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/explore' element={<Explore />}></Route>
              <Route path='/verfynft' element={<VerifyNft />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
            </Routes>
          </>
        )}
      </div>
    </>
  )
}
