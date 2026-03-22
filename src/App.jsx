import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Education />
                <Blogs />
                <Contact />
            </main>
        </div>
    );
}

export default App;
