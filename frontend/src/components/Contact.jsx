import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (You can integrate EmailJS or backend here)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Get in <span className="text-blue-600">Touch</span>
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Contact Information
          </h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-600" size={20} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vandana06bhakuni@gmail.com"
                className="hover:underline"
              >
                vandana06bhakuni@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <span>+91 7078983818</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-red-600" size={20} />
              <span>Almora, Uttarakhand</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/vandanabhakuni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/vandana-bhakuni-16b2ba271"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Send me a Message
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
