import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Mental Health Awareness Website",
            date: "Feb '26",
            tech: ["HTML", "CSS", "Bootstrap"],
            desc: [
                "Developed a responsive mental health awareness website with informative content.",
                "Built interactive UI using Bootstrap for better user engagement.",
                "Ensured mobile compatibility and user-friendly navigation."
            ],
            github: "https://github.com/kys-rajat/front_end_pjt"
        },
        {
            title: "AI Chatbot Web Application",
            date: "Apr '25",
            tech: ["HTML", "CSS", "JavaScript"],
            desc: [
                "Built an interactive AI-driven chatbot featuring a philosopher-style conversational persona.",
                "Implemented real-time message rendering with typing effects and smooth UI transitions.",
                "Designed a complete login-to-chat workflow ensuring a clean, responsive user experience."
            ],
            github: "https://github.com/Vikas3100/AI_chatbot"
        },
        {
            title: "CPU Scheduling Simulator",
            date: "Mar '25",
            tech: ["Python", "Tkinter", "Matplotlib"],
            desc: [
                "Developed a CPU scheduling simulator supporting FCFS, SJF, Round Robin, and Priority algorithms.",
                "Implemented real-time Gantt chart visualization for process execution flow.",
                "Calculated average waiting and turnaround times for algorithm performance comparison."
            ],
            github: "https://github.com/aditya2888/intelligent-cpu-scheduler"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card glass-panel">
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <span className="project-date">{project.date}</span>
                        </div>
                        <ul className="project-bullets">
                            {project.desc.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-badge">{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-cyan" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>View GitHub</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
