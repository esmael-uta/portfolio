import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Who I Am</h2>
      <p className="max-w-2xl mx-auto text-lg">
        Final-year Computer Science student specializing in Data Science, with expertise in building end-to-end machine
        learning pipelines, data engineering, and actionable analytics. Proficient in Python, R, SQL, TensorFlow, and
        Docker, I’ve done projects like fraud detection models, sales forecasting, and ETL pipelines for healthcare data.
        Skilled in deploying ML solutions with FastAPI and creating dashboards with Streamlit and Power BI. Passionate
        about transforming raw data into insights and scalable systems, I’m eager to apply my technical versatility and
        problem-solving skills as a Data Scientist, Machine Learning Engineer, or Data Engineer in innovative, data-
        driven environments.
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