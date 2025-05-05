// src/components/ExchangeRates.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/7c692d2df4e8bbd1528cab82/latest/USD')
      .then(res => {
        setRates(res.data.conversion_rates);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch exchange rates.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading exchange rates...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Live Exchange Rates (Base: USD)</h2>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;
