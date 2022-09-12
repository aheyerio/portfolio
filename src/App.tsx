import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Hero/>
            <Cards/>
            <Footer/>
        </div>
    );
}

export default App;
