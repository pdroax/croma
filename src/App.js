import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          {/* <Route exact path='/install' element={<Install/>}/>
          <Route exact path='/blog' element={<Blog/>}/> */}
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
