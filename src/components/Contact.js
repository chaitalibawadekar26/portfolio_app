import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section" id="contact">
      <h2 className="title">Contact</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "450px" }}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
          style={inputStyle}
        />

        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};
