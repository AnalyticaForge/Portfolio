import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Abraham Olamilekan Owoyele
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Data Analyst | SQL | Excel | Python | Power BI
        </motion.h2>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About */}
      <section id="about" className="section">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <p>
          I am a Data Analyst passionate about transforming raw data into
          meaningful business insights. I specialize in SQL, Microsoft Excel,
          Python, and Power BI to clean, analyze, visualize, and communicate
          data that supports informed decision-making.
        </p>

        <p>
          My background in Python programming has strengthened my analytical
          thinking and problem-solving skills, enabling me to build efficient,
          data-driven solutions that help businesses understand trends, measure
          performance, and make smarter decisions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Technical Skills
        </motion.h2>

        <div className="projects-grid">
          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Programming & Databases</h3>
            <p>
              SQL, Python, PostgreSQL, Data Querying, Data Cleaning, Data
              Manipulation
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Data Analytics Tools</h3>
            <p>
              Microsoft Excel, Pivot Tables, Pivot Charts, Power Query,
              Dashboards, Power BI
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Professional Skills</h3>
            <p>
              Data Analysis, Data Visualization, Business Insights, Problem
              Solving, Reporting, Git & GitHub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Sales Data Analysis</h3>

            <p>
              Conducted an end-to-end sales analysis using SQL and Microsoft
              Excel. Cleaned and analyzed transactional sales data to uncover
              revenue trends, top-performing products, customer purchasing
              patterns, and key business insights through data visualization and
              reporting.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>SQL Business Insights</h3>

            <p>
              Developed a collection of SQL queries to answer real-world
              business questions including sales performance, revenue analysis,
              customer segmentation, product ranking, and monthly performance
              reporting.
            </p>
          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Interactive Excel Dashboard</h3>

            <p>
              Built an interactive dashboard using Microsoft Excel featuring
              Pivot Tables, Pivot Charts, KPIs, filters, and business metrics
              that enable quick analysis of organizational performance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <p>
          I'm always open to discussing Data Analytics opportunities,
          collaborations, and freelance projects.
        </p>

        <p>Email: owoyeleabraham@gmail.com</p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/AnalyticaForge"
            target="_blank"
            rel="noreferrer"
          >
            AnalyticaForge
          </a>
        </p>

        <p>
          LinkedIn: Abraham Olamilekan Owoyele
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Abraham Olamilekan Owoyele | Data Analyst
        </p>
      </footer>
    </div>
  );
}

export default App;