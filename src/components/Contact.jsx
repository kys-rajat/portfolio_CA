import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container glass-panel">
                <p className="contact-text">
                    I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-info">
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <a href="mailto:therajatgupta8181@gmail.com" className="info-link">therajatgupta8181@gmail.com</a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Mobile:</span>
                        <a href="tel:+919341223782" className="info-link">+91-9341223782</a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/rajat-gupta09/" target="_blank" rel="noopener noreferrer" className="info-link">rajat-gupta09</a>
                    </div>
                    <div className="info-item">
                        <span className="info-label">GitHub:</span>
                        <a href="https://github.com/kys-rajat" target="_blank" rel="noopener noreferrer" className="info-link">kys-rajat</a>
                    </div>
                </div>

                <a href="mailto:therajatgupta8181@gmail.com" className="btn btn-primary contact-btn">Say Hello</a>
            </div>

            <footer className="footer">
                <p>Built with ❤️ by React & Vite</p>
                <p>&copy; {new Date().getFullYear()} Rajat Gupta. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
