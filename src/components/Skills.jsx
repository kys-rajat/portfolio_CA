import React from 'react';

const Skills = () => {
    const languages = ['C++', 'Python', 'MySQL', 'C', 'Java'];
    const tools = ['Git', 'VS Code', 'Ubuntu', 'Docker', 'Linux', 'VMware'];
    const cloud = ['AWS', 'Azure', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'];
    const soft = ['Adaptability', 'Leadership', 'Time Management', 'Critical Thinking'];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Skills & Technologies</h2>
            <div id="technologies" className="skills-container">

                <div className="skill-category glass-panel">
                    <h3>Languages</h3>
                    <ul className="skill-list">
                        {languages.map(lang => <li key={lang}>{lang}</li>)}
                    </ul>
                </div>

                <div className="skill-category glass-panel">
                    <h3>Tools & Platforms</h3>
                    <ul className="skill-list">
                        {tools.map(tool => <li key={tool}>{tool}</li>)}
                    </ul>
                </div>

                <div className="skill-category glass-panel">
                    <h3>Cloud & DevOps</h3>
                    <ul className="skill-list">
                        {cloud.map(c => <li key={c}>{c}</li>)}
                    </ul>
                </div>

                <div className="skill-category glass-panel">
                    <h3>Soft Skills</h3>
                    <ul className="skill-list">
                        {soft.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Skills;
