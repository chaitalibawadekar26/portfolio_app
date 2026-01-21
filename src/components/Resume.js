import React from "react";

export default function Resume() {
  return (
    <section className="section" id="resume">
      <h2 className="title">Resume</h2>
      <p className="subtext">
        Download my resume from below:
      </p>

      <a
        className="btn"
        href="https://example.com"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}
