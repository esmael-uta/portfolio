import React from 'react';

function Skills() {
  const skills = {
    "Programming": ["Python", "R", "SQL", "JavaScript"],
    "ML/DL": ["TensorFlow", "PyTorch", "Scikit-Learn"],
    "Data Engineering": ["ETL/ELT", "DBT", "Docker"],
  };

  return (
    <section id="skills" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">What I Bring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-teal-400">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;