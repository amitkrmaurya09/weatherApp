// src/About.js

import React from 'react';

const About = () => {
  return (
    <div id='About' style={styles.container}>
      <h2 style={styles.heading}>About This Application</h2>
      <p style={styles.paragraph}>
        Welcome to the Weather App! This application provides real-time weather information for any location worldwide. Built with React, it showcases modern web development practices and provides a seamless user experience.
      </p>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Repository Link</h3>
        <p style={styles.paragraph}>
          The source code for this project is available on GitHub. Feel free to explore the repository, contribute to the project, or report any issues you find.
          <br />
          <a style={styles.link} href="https://github.com/amitkrmaurya09/weatherApp" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Weather API</h3>
        <p style={styles.paragraph}>
          This application uses the OpenWeatherMap API to fetch weather data. The API provides current weather data, forecasts, and historical data for any location in the world. It is reliable, easy to use, and well-documented.
          <br />
          <a style={styles.link} href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer">
            OpenWeatherMap API
          </a>
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.subheading}>Features</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Real-time weather updates</li>
          <li style={styles.listItem}>Weather forecasts for the next 7 days</li>
          <li style={styles.listItem}>Historical weather data</li>
          <li style={styles.listItem}>Search by city or location</li>
          <li style={styles.listItem}>Responsive design for all devices</li>
        </ul>
      </section>

    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#555',
  },
  paragraph: {
    fontSize: '1em',
    marginBottom: '20px',
    color: '#666',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  section: {
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
    color: '#666',
  },
  listItem: {
    marginBottom: '10px',
  },
};

export default About;
