import React from 'react';

const Certificates = () => {
    const certs = [
        { title: "Fundamentals of Network communications", issuer: "Coursera", date: "Aug '25" },
        { title: "Bits and Bytes of Computer Networking", issuer: "Coursera", date: "Sep '25" },
        { title: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "Nov '25" },
        { title: "Introduction to Hardware and Operating Systems", issuer: "Coursera", date: "Sep '25" }
    ];

    const training = {
        company: "Cipher Schools (Edtech Company)",
        date: "Jun '25 - Jul '25",
        bullets: [
            "Strengthened C++ fundamentals and improved code efficiency through optimized logic and memory use",
            "Applied OOP concepts (Encapsulation, Inheritance, Abstraction, Polymorphism) to build modular software.",
            "Built a Library Management System using OOP, file handling, and exception management."
        ]
    };

    return (
        <section id="certificates" className="certificates-section">
            <h2 className="section-title">Training & Certificates</h2>

            <div className="experience-container">
                <div className="training-card glass-panel">
                    <h3 className="section-subtitle">Training</h3>
                    <div className="card-header">
                        <h4>{training.company}</h4>
                        <span>{training.date}</span>
                    </div>
                    <ul className="details-list">
                        {training.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                </div>

                <div className="certifications-grid">
                    <h3 className="section-subtitle">Certificates</h3>
                    {certs.map((cert, idx) => (
                        <div key={idx} className="cert-card glass-panel">
                            <div className="cert-icon">🏆</div>
                            <div className="cert-info">
                                <h4>{cert.title}</h4>
                                <div className="cert-meta">
                                    <span className="issuer">{cert.issuer}</span>
                                    <span className="date">{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
