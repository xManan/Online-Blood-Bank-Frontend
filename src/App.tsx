import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import FindBloodBank from './components/FindBloodBank'
import FindDonor from './components/FindDonor'
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
                <Route path='/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
