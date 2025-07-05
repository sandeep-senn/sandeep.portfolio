"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="bg-white/20 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl animate-pulse font-bold text-blue-500 mb-10"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-900 mb-12"
        >
          Have a project, idea, or just want to chat? Fill out the form below and let’s connect!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 bg-white/5 border border-black/10 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 bg-white/5 border border-black/10 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-5 py-3 bg-white/5 border border-black/10 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
