import React from 'react';
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to the Ultimate Internet Guide!</h1>
        <p>Explore the vast world of the Internet with our comprehensive guide.</p>
      </header>
      
      <section className="features">
        <h2>Key Features of the Internet Guide</h2>
        <div className="feature">
          <h3>Beginner's Corner</h3>
          <p>Understand the basics of the Internet, stay safe online, and get introduced to social media platforms.</p>
        </div>
        <div className="feature">
          <h3>Advanced Tutorials</h3>
          <p>Deep dive into cybersecurity, explore advanced programming concepts, and master digital marketing.</p>
        </div>
        <div className="feature">
          <h3>Tools and Resources</h3>
          <p>Access top-rated online tools, educational resources, and join interactive forums for community support.</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Users Are Saying</h2>
        <blockquote>
          <p>"The Ultimate Internet Guide has been a game-changer for my online business. The advanced tutorials on digital marketing helped me triple my revenue!"</p>
          <footer>— Jane D.</footer>
        </blockquote>
        <blockquote>
          <p>"As a newbie to the online world, the Beginner's Corner was exactly what I needed. The guides are easy to understand and super helpful."</p>
          <footer>— John S.</footer>
        </blockquote>
        <p>Join our community and share your experiences, ask questions, and grow together in our interactive forums.</p>
      </section>
      
      <footer className="footer">
        <button className="signup-button">Sign Up Now and Start Your Journey!</button>
        <nav>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Follow Us on Social Media</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;

