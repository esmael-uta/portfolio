import React from 'react';

function Projects() {
  const projects = [
    { title: "Credit Fraud Detection", desc: "ML model for fraud detection.", tools: "Python, Scikit-Learn, Docker" },
    { title: "Sales Prediction Model", desc: "Time-series sales forecasting.", tools: "PyTorch, Plotly, MLflow" },
    { title: "Medical Business Data Warehouse", desc: "ETL pipeline for healthcare.", tools: "SQL, DBT, Power BI" },
  ];

  return (
    <section id="projects" className="py-16 px-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.desc}</p>
            <p className="text-teal-400">{project.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;