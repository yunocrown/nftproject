// eslint-disable-next-line
import React , { useState , useEffect , useContext } from 'react';
import { Routes , Route , useLocation } from 'react-router-dom';
import './App.css';

import Loading from './components/UI/Loading/Loading.jsx';
import { setAuthSellerToken } from './utils/setAuthToken.js';
import { setAuthUserToken } from './utils/setAuthToken.js';

import UserPrivateRoute from "./PrivateRoutes/UserPrivateRoute.js"
import SellerPrivateRoute from "./PrivateRoutes/SellerPrivateRoute.js"

import Home from "./components/Home/Home.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Explore from './components/Explore/Explore.jsx';
import VerifyNft from './components/VerifyNft/VerifyNft.jsx';
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Product from "./components/Product/Product.jsx";
import User from "./components/User/User.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Retailer from "./components/Retailer/Retailer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx"
import CategoryPage from "./components/CategoryPage/CategoryPage.jsx";
import { sellerAuthContext, userAuthContext } from './Contexts/index.js';

if (localStorage.sellerToken) {
  setAuthSellerToken(localStorage.sellerToken);
}
if (localStorage.userToken) {
  setAuthUserToken(localStorage.userToken);
}

export default function App() {
  const location = useLocation();
  const { loadSellerIfTokenFound } = useContext(sellerAuthContext);
  const { loadUserIfTokenFound } = useContext(userAuthContext);
  useEffect(() => {
    window.scrollTo(0,0);
    loadSellerIfTokenFound();
    loadUserIfTokenFound()
  }, [location])

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
              <Route
                path='/retailer/dashboard'
                element={
                  <SellerPrivateRoute>
                    <Retailer />
                  </SellerPrivateRoute>
                }
              ></Route>
              <Route
                path='/user/dashboard'
                element = {
                  <UserPrivateRoute>
                    <Retailer />
                  </UserPrivateRoute>
                }
              ></Route>
              <Route path='/category' element = {<CategoryPage />}></Route>
              <Route path='/product/:productId' element = {<Product />}></Route>
              <Route path='/cart' element = {<Cart />}></Route>
              <Route path='/explore' element = {<Explore />}></Route>
              <Route path='*' element = {<NotFound />}></Route>
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  )
}
