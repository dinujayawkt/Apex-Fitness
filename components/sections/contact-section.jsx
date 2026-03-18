"use client";

import { useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";
import { sendContactEmail } from "../../services/emailjs-service";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!successMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSuccessMessage("");
    }, 4000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [successMessage]);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      await sendContactEmail(formData);

      setSuccessMessage("Thanks! Your message has been sent. We will contact you shortly.");
      setFormData(initialState);
    } catch (error) {
      const details = error instanceof Error ? error.message : "Unknown error.";
      console.error("EmailJS send failed:", details);
      setErrorMessage(`Email send failed: ${details}`);
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-(--bg)">
      <div className="container grid gap-[1.2rem] lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading eyebrow="Get In Touch" title="Start Your Journey" />
          <p className="max-w-[64ch] leading-[1.7] text-(--muted)">
            Ready to transform your routine? Send us your details and we will help you find the
            right plan and coaching path.
          </p>
          <div className="mt-7 grid gap-[0.95rem]">
            <p className="m-0 leading-[1.7] text-(--muted)">
              <strong className="block text-[0.68rem] uppercase tracking-[0.1em] text-(--gold)">
                Location
              </strong>
              42 Iron Street, Fitness District, CA
            </p>
            <p className="m-0 leading-[1.7] text-(--muted)">
              <strong className="block text-[0.68rem] uppercase tracking-[0.1em] text-(--gold)">
                Hours
              </strong>
              Mon-Fri 6am-11pm · Sat-Sun 7am-9pm
            </p>
            <p className="m-0 leading-[1.7] text-(--muted)">
              <strong className="block text-[0.68rem] uppercase tracking-[0.1em] text-(--gold)">
                Contact
              </strong>
              hello@apexfitness.com · +1 (800) 991-0203
            </p>
          </div>
        </div>

        <form
          className="grid gap-[0.56rem] border border-(--line) bg-[color-mix(in_srgb,var(--panel)_70%,transparent)] p-[1.35rem]"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name" className="text-[0.68rem] uppercase tracking-[0.1em] text-(--muted)">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            className="w-full border border-(--line) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] p-3 text-(--text) outline-none focus:border-(--gold) focus:outline-1 focus:outline-(--gold) aria-[invalid=true]:border-[#da4a35]"
          />
          {errors.name ? <small className="mb-[0.45rem] text-[#ff795c]">{errors.name}</small> : null}

          <label htmlFor="email" className="text-[0.68rem] uppercase tracking-[0.1em] text-(--muted)">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            className="w-full border border-(--line) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] p-3 text-(--text) outline-none focus:border-(--gold) focus:outline-1 focus:outline-(--gold) aria-[invalid=true]:border-[#da4a35]"
          />
          {errors.email ? <small className="mb-[0.45rem] text-[#ff795c]">{errors.email}</small> : null}

          <label htmlFor="message" className="text-[0.68rem] uppercase tracking-[0.1em] text-(--muted)">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            className="w-full border border-(--line) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] p-3 text-(--text) outline-none focus:border-(--gold) focus:outline-1 focus:outline-(--gold) aria-[invalid=true]:border-[#da4a35]"
          />
          {errors.message ? <small className="mb-[0.45rem] text-[#ff795c]">{errors.message}</small> : null}

          <button type="submit" className="btn btn--solid disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {errorMessage ? (
            <p className="mt-2 border border-[color-mix(in_srgb,#da4a35_65%,transparent)] bg-[color-mix(in_srgb,#da4a35_14%,transparent)] px-[0.8rem] py-[0.6rem] text-[#ff846f]">
              {errorMessage}
            </p>
          ) : null}

          {successMessage ? (
            <p className="mt-2 border border-[color-mix(in_srgb,#89ce8d_60%,transparent)] bg-[color-mix(in_srgb,#89ce8d_14%,transparent)] px-[0.8rem] py-[0.6rem] text-[#89ce8d]">
              {successMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
