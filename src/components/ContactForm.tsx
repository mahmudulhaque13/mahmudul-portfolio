"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result: { message?: string } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus({
        type: "success",
        message:
          result.message || "Your message has been submitted successfully.",
      });
      form.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-form-column">
      <div className="form-heading">
        <h3>Send me a message</h3>
        <p>I&apos;ll get back to you as soon as I can.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What would you like to discuss?"
            minLength={3}
            maxLength={150}
            required
            disabled={loading}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your project or opportunity..."
            minLength={10}
            maxLength={5000}
            rows={5}
            required
            disabled={loading}
          />
        </div>

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button className="contact-submit" type="submit" disabled={loading}>
          {loading ? (
            <>
              <span className="form-spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send message <span aria-hidden="true">↗</span>
            </>
          )}
        </button>

        {status && (
          <p
            className={
              status.type === "success"
                ? "form-status-success"
                : "form-status-error"
            }
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
