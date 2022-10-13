import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import  Home  from './pages/Home';
import Products from './pages/Products'
// import Silder from './components/Silder'
import Carts from './pages/Carts'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SingleProduct from './pages/SingleProduct'
const App = () => {
  return (
    <>
<Router>     
    <div>
      <Navbar />
      </div>
          <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route  path='/products' element={<Products/>}></Route>
          <Route  path='/signin' element={<SignIn />}></Route>
          <Route  path='/signup' element={<SignUp />}></Route>
          <Route  path='/singleproduct/:id' element={<SingleProduct />}></Route>
          <Route  path='/carts' element={<Carts />}></Route>
         
        </Routes>
      </Router> 
      </>
      
  )
}

export default App