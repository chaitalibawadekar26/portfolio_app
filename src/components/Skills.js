import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "GitHub", "API"];

  return (
    <section className="section" id="skills">
      <h2 className="title">Skills</h2>

      <div className="grid">
        {skills.map((s, i) => (
          <div className="card" key={i}>
            <h3>{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
