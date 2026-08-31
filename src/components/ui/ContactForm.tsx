"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Partnership & Collaboration",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="contact-success-state">
        <div className="contact-success-icon">✓</div>
        <h4>Message Received!</h4>
        <p>
          Thank you for reaching out, <strong>{formData.name}</strong>. Our team in Malawi has
          received your inquiry and will respond to <strong>{formData.email}</strong> within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              subject: "Partnership & Collaboration",
              message: "",
            });
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Full Name</label>
        <input
          id="name"
          type="text"
          required
          placeholder="e.g. Ibrahim Banda"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          required
          placeholder="e.g. ibrahim@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Inquiry Purpose</label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="Partnership & Collaboration">Institutional Partnership &amp; Collaboration</option>
          <option value="Zakat & Donation Support">Zakat &amp; Donation Allocation</option>
          <option value="Agricultural & Field Programs">Agricultural &amp; Field Programs</option>
          <option value="Education & Madrassah Support">Education &amp; Madrassah Support</option>
          <option value="General Inquiries">General Inquiries</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="How can we assist you or collaborate?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button type="submit" className="btn btn-primary btn--block" disabled={loading}>
        {loading ? "Sending Message..." : "Send Message →"}
      </button>
    </form>
  );
}
