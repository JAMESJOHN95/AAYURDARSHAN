import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Componants/Footer'
import Header from './Componants/Header'
import Home from './Pages/Home'
import Authentication from './Pages/Authentication'
import Treatments from './Pages/Treatments'
import Enquiry from './Pages/Enquiry'
import Reviews from './Pages/Reviews'
import Admin from './Componants/Admin'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<Authentication/>}/>
        <Route path = '/register' element = {<Authentication  insideregister/>}/>
        <Route path = '/treatments' element = {<Treatments/>}/>
        <Route path = '/reviews' element = {<Reviews/>}/>
        <Route path = '/enquiry' element = {<Enquiry/>}/>
        <Route path = '/admin' element = {<Admin/>}/>


      </Routes>

        <Footer />
      </>
      )
}

      export default App
