import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Blog from './components/pages/Blog'
import Install from './components/pages/Install'
import Sales from './components/pages/Sales'

// export const MyComponent = () => {
//   const location = useLocation();
//   console.log("Path: ", location.pathname)
//   return location.pathname
// }

 const App = () => {

  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/install' element={<Install/>}/>  
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/sales' element={<Sales/>}/>   
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
