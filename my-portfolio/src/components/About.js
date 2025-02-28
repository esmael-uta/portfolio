import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Who I Am</h2>
      <p className="max-w-2xl mx-auto text-lg">
        I’m a final-year Computer Science student passionate about data science, machine learning, and engineering. 
        I’ve built end-to-end ML pipelines, tackled real-world problems like fraud detection, and crafted data solutions 
        with tools like Python, TensorFlow, and Docker. Ready to bring my skills to innovative teams!
      </p>
      <div className="text-center mt-6">
        <a 
          href="/resume.pdf" 
          download="YourName_Resume.pdf" 
          className="bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600"
        >
          See Resume
        </a>
      </div>
    </section>
  );
}

export default About;