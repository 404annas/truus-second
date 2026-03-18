import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const queryOptions = [
  "Concerts & Festivals",
  "Corporate Events",
  "University Shows",
  "Brand Activations",
  "Artist Bookings",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  query: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
    if (statusMessage) setStatusMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    await new Promise((resolve) => window.setTimeout(resolve, 1600));

    setFormData(initialForm);
    setIsSubmitting(false);
    setStatusMessage("We’ve received your query and will get back to you soon.");
  };

  return (
    <section
      id="contact"
      data-navbar-theme="dark"
      className="relative overflow-hidden bg-gradient-to-b from-[#00192b] to-[#015696] py-10 text-white px-4 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full border border-white/10" />
        <div className="absolute right-10 top-0 h-28 w-28 rounded-full border border-white/10" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="max-w-xl">
          <p className="man text-xs font-semibold uppercase text-white/65">
            Let&apos;s Make It Happen
          </p>
          <h2 className="mt-4 shadow-font text-4xl leading-none sm:text-5xl">
            Tell us what you&apos;re planning.
          </h2>
          <p className="man mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
            Share your event, campaign, or artist booking requirement and we&apos;ll
            come back with the right direction for it.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full rounded-[2rem] border border-white/14 bg-white/6 p-5 backdrop-blur-md sm:p-7 lg:p-8"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="man flex flex-col gap-2 text-sm font-medium text-white/88">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="h-13 rounded-2xl border border-white/16 bg-white/5 px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:border-white/40"
              />
            </label>

            <label className="man flex flex-col gap-2 text-sm font-medium text-white/88">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="h-13 rounded-2xl border border-white/16 bg-white/5 px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:border-white/40"
              />
            </label>

            <label className="man flex flex-col gap-2 text-sm font-medium text-white/88">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 0000000"
                required
                className="h-13 rounded-2xl border border-white/16 bg-white/5 px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:border-white/40"
              />
            </label>

            <label className="man flex flex-col gap-2 text-sm font-medium text-white/88">
              Query
              <select
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                className="h-13 rounded-2xl border border-white/16 bg-[#02385f] px-4 text-white outline-none transition-colors duration-300 focus:border-white/40"
              >
                <option value="" disabled>
                  Select a query
                </option>
                {queryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="man mt-4 flex flex-col gap-2 text-sm font-medium text-white/88">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event, goals, expected audience, or artist requirement."
              rows={6}
              required
              className="min-h-36 rounded-[1.5rem] border border-white/16 bg-white/5 px-4 py-4 text-white outline-none transition-colors duration-300 placeholder:text-white/45 focus:border-white/40 resize-none"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="man inline-flex h-12 items-center justify-center gap-3 rounded-lg cursor-pointer border border-white/20 bg-white/8 px-5 text-sm font-semibold uppercase text-white transition-colors duration-300 hover:bg-white/12 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-xl cursor-pointer border-2 border-white/30 border-t-white" />
                  Submitting
                </>
              ) : (
                "Submit"
              )}
            </button>

            <AnimatePresence mode="wait">
              {statusMessage ? (
                <motion.p
                  key={statusMessage}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="man text-sm text-white"
                >
                  {statusMessage}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
