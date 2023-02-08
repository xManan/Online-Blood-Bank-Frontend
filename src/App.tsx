import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import FindBloodBank from './components/FindBloodBank'
import FindDonor from './components/FindDonor'
import AboutUs from './components/AboutUs'
import RegisterDonor from './components/RegisterDonor'
import LoginDonor from './components/LoginDonor'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import { useLayoutEffect } from 'react'

const Wrapper = (props: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return props.children
}


function App() {
    return (
        <>
            <NavBar />
            <br />
            <br />
            <br />
            <br />
            <Wrapper>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/find-blood-bank' element={<FindBloodBank />} />
                    <Route path='/find-donor' element={<FindDonor />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/register' element={<RegisterDonor />} />
                    <Route path='/login' element={<LoginDonor />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Wrapper>
            <Footer />
        </>
    )
}

export default App
