import React from "react";

export default function Projects() {
  const projects = [
    { title: "Fitness Tracking", desc: "using Html, CSS, JS" },
    { title: "Weather App", desc: "Weather app using API" },
    { title: "Movie Search", desc: "Movie search using OMDB API" },
  ];

  return (
    <section className="section" id="projects">
      <h2 className="title">Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p className="subtext">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
