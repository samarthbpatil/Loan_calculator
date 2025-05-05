import React, { useState } from 'react';
import { TextField, Button, Typography, Box, MenuItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState('INR');

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(interest) / 12 / 100;
    const N = parseInt(years) * 12;

    const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiCalc.toFixed(2));

    const newSchedule = [];
    let balance = P;

    for (let i = 1; i <= N; i++) {
      const interestPayment = balance * R;
      const principalPayment = emiCalc - interestPayment;
      balance -= principalPayment;
      newSchedule.push({
        month: i,
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setSchedule(newSchedule);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>

      <Box display="flex" flexDirection="column" gap={2} maxWidth={400}>
        <TextField label="Loan Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <TextField label="Interest Rate (%)" type="number" value={interest} onChange={(e) => setInterest(e.target.value)} />
        <TextField label="Term (Years)" type="number" value={years} onChange={(e) => setYears(e.target.value)} />
        
        <TextField
          select
          label="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </TextField>

        <Button variant="contained" onClick={calculateEMI}>Calculate</Button>
        {emi && <Typography variant="h6">Monthly EMI: {currency} {emi}</Typography>}
      </Box>

      {schedule.length > 0 && (
  <Box mt={5}>
    <Typography variant="h5" gutterBottom>Amortization Schedule ({currency})</Typography>
    <Box sx={{ maxHeight: 400, overflow: 'auto', border: '1px solid #ccc', borderRadius: 2 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.principal} {currency}</TableCell>
              <TableCell>{row.interest} {currency}</TableCell>
              <TableCell>{row.balance} {currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Box>
      )}
    </Box>
  );
};

export default Home;
