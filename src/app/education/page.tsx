"use client";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationList = [
  {
    degree: "B.Tech in Computer Science",
    institution: "LNCT Group of Colleges, Bhopal",
    percentage: "7.8 CGPA",
    duration: "2022 - 2026",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Deepmala Pagarani Sanskar Public School",
    percentage: "90%",
    duration: "2021 - 2022",
  },
  {
    degree: "Secondary (10th)",
    institution: "Deepmala Pagarani Sanskar Public School",
    percentage: "96.3%",
    duration: "2019 - 2020",
  },
];

export default function EducationPage() {
  return (
    <section className="min-h-screen bg-white text-black py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-10xl md:text-8xl animate-caret-blink font-bold text-center text-blue-600 mb-16">
          Education
        </h2>

        <div className="relative border-l-2 md:border-l-0 md:border-blue-500">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-blue-500 z-0"></div>
          {/* Graduation caps mapped on the line */}
          {educationList.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex md:items-center mb-14" style={{ minHeight: '120px' }}>
                {/* Graduation cap on the line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10" style={{ top: '50%' }}>
                  <div className="bg-white border-2 border-blue-500 rounded-full p-2">
                    <GraduationCap className="text-blue-600 w-5 h-5" />
                  </div>
                </div>
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`md:w-1/2 px-4 md:px-0 ${
                    isLeft ? "md:pr-10 md:ml-0 md:mr-auto" : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <div className="bg-blue-50 border border-blue-100 rounded-xl shadow-md p-5">
                    <h3 className="text-xl font-semibold text-blue-700">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    <span className="text-sm text-gray-500">{edu.duration}</span>
                    <p className="text-sm text-gray-500">{edu.percentage}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
