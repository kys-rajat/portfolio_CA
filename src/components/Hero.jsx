import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <motion.p
                    className="greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    className="name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Rajat Gupta.
                </motion.h1>

                <motion.h2
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I build <span className="text-gradient">innovative software.</span>
                </motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    I'm a Computer Science engineering student at LPU specializing in cloud architecture, full-stack development, and AI-driven applications. I love turning complex problems into beautiful, functional, and user-friendly digital experiences.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-primary">Get in Touch</a>
                    <a href="/Kys_rjt_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume (PDF)</a>
                </motion.div>
            </div>

            <motion.div
                className="hero-graphic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
