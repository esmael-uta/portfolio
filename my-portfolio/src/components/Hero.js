import React from 'react';

function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center pt-16">
      <div>
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Esmael Aliyi Uta</h1>
        <p className="text-xl mb-6">Junior Data Scientist| ML Engineer</p>
        <p className="text-lg mb-8">Final-year Computer Science student specializing in Data Science</p>
        <a href="#projects" className="bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600">Explore My Work</a>
      </div>
    </section>
  );
}

export default Hero;