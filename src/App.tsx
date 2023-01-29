import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import FindBloodBank from './components/FindBloodBank'
import FindDonor from './components/FindDonor'
import AboutUs from './components/AboutUs'
import BeDonor from './components/BeDonor'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <>
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/find-blood-bank' element={<FindBloodBank />} />
                <Route path='/find-donor' element={<FindDonor />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/be-a-donor' element={<BeDonor />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
