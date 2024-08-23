import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="resume">
        <header>
          <h1>Esha Amir</h1>
          <div className="contact-info">
            <p>Rawalpindi, Pakistan</p>
            <p><a href="tel:+923495046922">+923495046922</a></p>
            <p><a href="mailto:eshaamirgondal58@gmail.com">eshaamirgondal58@gmail.com</a></p>
            <p><a href="https://linkedin.com/in/esha-amir-gondal-496119219">LinkedIn</a> | <a href="https://github.com/eshaamir">GitHub</a></p>
          </div>
        </header>

        <section>
          <h2>Education</h2>
          <p><strong>Bahria University</strong> - Islamabad, Pakistan</p>
          <p>Bachelor of Computer Science (2020 – 2024)</p>
        </section>

        <section>
          <h2>Technical Skills & Projects</h2>
          <ul>
            <li>
              <strong>SpeakScribe</strong> - <a href="https://speak-scribe.vercel.app/">Live Demo</a>
              <p>Built with React.js and the Web Speech API, utilizing cutting-edge web technologies for real-time speech transcription.</p>
            </li>
            <li>
              <strong>GestuSlide Master</strong> - <a href="https://gestu-slide-master.vercel.app/">Live Demo</a>
              <p>Developed using JavaScript and React.js, with gesture recognition enabled through modern JavaScript libraries.</p>
            </li>
            <li>
              <strong>Tic Tac Toe</strong> - <a href="https://tic-tac-toe-classic.vercel.app/">Live Demo</a>
              <p>Developed using React.js, emphasizing component-based architecture and optimized state management.</p>
            </li>
            <li>
              <strong>Flappy Bird Game</strong> - <a href="https://flappy-bird-game-classic.vercel.app/">Live Demo</a>
              <p>Created using JavaScript and HTML5 Canvas, focusing on game development and animation techniques.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <ul>
            <li>
              <strong>HA Technologies - Frontend Intern</strong> (Aug 2023 – Nov 2023)
              <p>Revamped company portfolio with React, demonstrated proficiency in HTML, CSS, Bootstrap, and Tailwind.</p>
            </li>
            <li>
              <strong>Bytewise Internship - Front-End Software Intern</strong> (May 2024 – Present)
              <p>Specializing in building dynamic, high-performance web applications using React and Next.js.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
