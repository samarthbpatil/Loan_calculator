// import React from 'react';
// import { Typography } from '@mui/material';

// const About = () => (
//   <Typography variant="h5">This Loan Calculator helps users calculate EMI based on amount, interest rate, and duration.</Typography>
// );

// export default About;

import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About This App</h1>
      <p style={styles.text}>
        This Loan Calculator app helps users estimate their loan repayments based on the loan amount,
        interest rate, and loan term. It is designed to provide a simple and user-friendly experience
        to help users plan their finances better.
      </p>

      <h2 style={styles.subheading}>Key Features</h2>
      <ul style={styles.list}>
        <li>Calculate monthly and total payments.</li>
        <li>Real-time currency exchange rates.</li>
        <li>Simple and clean interface.</li>
        <li>Fast, responsive, and mobile-friendly.</li>
      </ul>

      <h2 style={styles.subheading}>Tech Stack</h2>
      <ul style={styles.list}>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>ExchangeRate-API</li>
      </ul>

      <h2 style={styles.subheading}>Exchange Rate API</h2>
        <p style={styles.text}>
        This application uses the&nbsp;
        <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">
            ExchangeRate-API
        </a>
        &nbsp;to fetch real-time currency exchange rates. The API provides reliable and fast access
        to global currency conversion data and is essential for displaying up-to-date information 
        in the app.
        </p>
        <p style={styles.text}>
        You can learn more or get your own API key at:&nbsp;
        <a href="https://app.exchangerate-api.com/sign-in" target="_blank" rel="noopener noreferrer">
            https://app.exchangerate-api.com/sign-in
        </a>
        </p>

      <p style={styles.footerText}>
        Developed by Samarth Patil. All rights reserved.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '18px',
  },
  footerText: {
    marginTop: '40px',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '16px',
    color: '#555',
  },
};

export default About;

