"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const initialData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(initialData);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Could not send your enquiry.");
      }

      setStatus("success");
      setMessage("Enquiry sent. We will get back to you soon.");
      setFormData(initialData);
    } catch (error) {
      setStatus("error");
      const errorMessage =
        error instanceof Error ? error.message : "Could not send your enquiry.";
      setMessage(errorMessage);
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
      <div className="contact-form-title">Tell us about your project</div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name
          </label>
          <input
            className="form-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="form-input"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="service">
          Service Required
        </label>
        <select
          className="form-input form-select"
          id="service"
          name="service"
          value={formData.service}
          onChange={(event) =>
            setFormData({ ...formData, service: event.target.value })
          }
          required
        >
          <option value="">Select a service...</option>
          <option value="Custom Furniture">Custom Furniture</option>
          <option value="Bespoke Cabinetry">Bespoke Cabinetry</option>
          <option value="Architectural Joinery">Architectural Joinery</option>
          <option value="Restoration & Repair">Restoration & Repair</option>
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Tell Us About Your Project
        </label>
        <textarea
          className="form-input form-textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          required
        />
      </div>

      <button type="submit" className="form-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {message ? <p className="form-feedback">{message}</p> : null}
    </form>
  );
}
