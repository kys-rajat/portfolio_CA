import React from 'react';

const Navbar = () => {
    const links = ['Home', 'About', 'Skills', 'Technologies', 'Projects', 'Certificates', 'Education', 'Blogs', 'Contact'];

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                <span>Rajat Gupta</span>
                <span>Portfolio</span>
            </a>

            <ul className="nav-links">
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
                <li>
                    <a href="/Kys_rjt_cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
