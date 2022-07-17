import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import  Home  from './pages/Home';
import Products from './pages/Products'
// import Silder from './components/Silder'
import Carts from './pages/Carts'
import SignIn from './pages/SignIn'
import SingleProduct from './pages/SingleProduct'
const App = () => {
  return (
    <>
<Router>     
    <div className='h-screen'>
      <Navbar />
      </div>
          <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/singleproduct' element={<SingleProduct />}></Route>
          <Route exact path='/carts' element={<Carts />}></Route>
         
        </Routes>
      </Router> 
      </>
      
  )
}

export default App