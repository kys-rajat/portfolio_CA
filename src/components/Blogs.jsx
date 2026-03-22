import React from 'react';

const Blogs = () => {
    return (
        <section id="blogs" className="blogs-section about-section" style={{ maxWidth: '1200px' }}>
            <h2 className="about-title"><span className="text-accent">07.</span> Blogs & Writing</h2>
            <p className="blogs-subtitle">Articles and reflections on technical learning, best practices, and experiences in software development.</p>

            <div className="blogs-grid">
                <div className="blog-card glass-panel">
                    <h3>Why Data Structures & Algorithms Matter for Every Developer</h3>
                    <p>An overview of how a strong DSA foundation improves code quality, system design thinking, and interview readiness—with practical takeaways for students and early-career developers.</p>
                    <a href="#" className="read-more">Read more &rarr;</a>
                </div>

                <div className="blog-card glass-panel">
                    <h3>My Learning Path in Web Development: From Basics to Projects</h3>
                    <p>A structured account of moving from HTML/CSS/JS fundamentals to building full projects—including resources, milestones, and lessons that accelerated my progress.</p>
                    <a href="#" className="read-more">Read more &rarr;</a>
                </div>

                <div className="blog-card glass-panel">
                    <h3>Taking the First Steps in Open Source Contribution</h3>
                    <p>How I identified beginner-friendly projects, understood contribution workflows, and overcame initial hurdles—a guide for others looking to start contributing to open source.</p>
                    <a href="#" className="read-more">Read more &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
