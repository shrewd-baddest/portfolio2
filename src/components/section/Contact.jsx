import { useState } from "react";
import Heading from "../ui/Heading";

const FIELDS = [
  { id: "name", type: "text", placeholder: "Full Name" },
  { id: "email", type: "email", placeholder: "Email Address" },
  { id: "phone", type: "tel", placeholder: "Mobile Number" },
  { id: "subject", type: "text", placeholder: "Email Subject" },
];

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace alert with your real submission logic
    alert("Message sent!");
    setFormData(EMPTY_FORM);
  };

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-2xl mx-auto px-6">
        <Heading pre="Contact" highlight="Me!" />

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {/* Text inputs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {FIELDS.map((field) => (
              <input
                key={field.id}
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 transition-colors font-sans"
              />
            ))}
          </div>

          {/* Textarea */}
          <textarea
            id="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500 transition-colors font-sans resize-none mb-4"
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-mono text-sm tracking-widest uppercase hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-200 hover:shadow-lg hover:shadow-violet-700/40"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
