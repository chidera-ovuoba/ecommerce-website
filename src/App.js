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
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path='/products'>
           <Products/>
         </Route>
          <Route path='/signin'>
            <div className='grid place-items-center'>
            <SignIn />
            </div> 
          </Route>
          <Route path='/singleproduct'>
          <SingleProduct />
          </Route>
          <Route path='/carts'>
          <Carts />
          </Route>
        </Routes>
      </Router> 
      </>
      
  )
}

export default App