import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation';
import "./css/main.css";
import "./css/cover.css";
import "./css/mobile.css";
import "./css/tablet.css";
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About';

export function App() {

    const links = [
        { name: 'Highlights', url: '/', selected: true, external: false },
        { name: 'About', url: '/about', selected: false, external: false },
        { name: 'GitHub', url: 'https://github.com/umerkay/', selected: false, external: true }
    ];

    return (
        <Router>
            <Navigation links={links} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer></Footer>
        </Router>
    );
}