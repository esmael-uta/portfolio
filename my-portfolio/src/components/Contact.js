import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8">Let’s Connect</h2>
      <p className="text-center mb-6">Seeking internships or junior roles in Data Science & ML.</p>
      <div className="text-center">
        <a href="mailto:esmaeluta@gmail.com" className="text-teal-400">esmaelutagmail.com</a> | 
        <a href="https://github.com/Isma7471" className="text-teal-400 ml-2">GitHub</a> | 
        <a href="https://www.linkedin.com/in/esmael-uta-28b09123b" className="text-teal-400 ml-2">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;