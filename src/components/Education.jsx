import React from 'react';

const Education = () => {
    const eduData = [
        {
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology",
            field: "Computer Science and Engineering",
            score: "CGPA: 6.16",
            date: "Aug '23 - Present"
        },
        {
            institution: "D.A.V PUBLIC SCHOOL",
            location: "Siwan, Bihar",
            degree: "Intermediate",
            field: "PCM",
            score: "Percentage: 65%",
            date: "Mar '22 - May '23"
        },
        {
            institution: "D.A.V PUBLIC SCHOOL",
            location: "Siwan, Bihar",
            degree: "Matriculation",
            field: "",
            score: "Percentage: 72%",
            date: "Mar '20 - May '21"
        }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
                {eduData.map((edu, idx) => (
                    <div key={idx} className="timeline-item glass-panel">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">{edu.date}</div>
                        <div className="timeline-content">
                            <h3>{edu.institution}</h3>
                            <p className="location">{edu.location}</p>
                            <h4>{edu.degree} {edu.field && `in ${edu.field}`}</h4>
                            <p className="score">{edu.score}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
