import React from 'react';
import './About.css'; // Optional: For custom styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About TaskMaster</h1>
      </header>
      <section className="about-introduction">
        <h2>Introduction</h2>
        <p>
          TaskMaster is a powerful task management application designed to help you stay organized and efficient. With TaskMaster, you can easily track your tasks, set deadlines, and manage your projects with ease.
        </p>
      </section>
      <section className="about-features">
        <h2>Features</h2>
        <ul>
          <li>Create and manage tasks</li>
          <li>Set deadlines and reminders</li>
          <li>Track progress and completion</li>
          <li>Intuitive user interface</li>
        </ul>
      </section>
      
      <section className="about-developer">
        <h2>Developer</h2>
        <p>
          TaskMaster was developed by <a href="https://arshssandhu.github.io/">Arshpreet S. Sandhu</a> With a passion for productivity and technology, I created this app to help individuals and teams manage their tasks more effectively.
        </p>
      </section>
      <section className="about-contact">
        <h2>Contact</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to me at <a href="https://www.linkedin.com/in/arshpreet-singh-sandhu-ba0a14256/">LinkedIN</a>.
        </p>
      </section>
      <section className="about-version">
        <h2>Version</h2>
        <p>
          Version 1.0.0 - Initial Release
        </p>
      </section>
    </div>
  );
};

export default About;
