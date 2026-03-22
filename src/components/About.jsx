import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title">About Me</h2>
            <div className="about-inner">
                <div className="about-text-container">
                    <p>
                        I am a Computer Science and Engineering student with a strong focus on <strong>cloud computing</strong> and <strong>DevOps practices</strong>. I have hands-on experience in designing and deploying cloud-based applications with an emphasis on scalability, security, and automation.
                    </p>
                    <p>
                        I work with technologies such as <strong>AWS, Azure</strong>, Infrastructure as Code, CI/CD pipelines, and containerized environments to build reliable and efficient systems. I am passionate about cloud architecture, automation, and optimizing workflows to support modern, high-availability applications.
                    </p>
                    <ul className="about-skills-list">
                        <li><span className="bullet">›</span> AWS & Azure</li>
                        <li><span className="bullet">›</span> Infrastructure as Code</li>
                        <li><span className="bullet">›</span> CI/CD Pipelines</li>
                        <li><span className="bullet">›</span> Containerized Environments</li>
                        <li><span className="bullet">›</span> Cloud Architecture & Automation</li>
                    </ul>
                </div>
                <div className="about-image-container">
                    <img
                        src="/profile.png"
                        alt="Rajat Gupta"
                        className="about-profile-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://ui-avatars.com/api/?name=Rajat+Gupta&size=400&background=1e293b&color=1abc9c";
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
