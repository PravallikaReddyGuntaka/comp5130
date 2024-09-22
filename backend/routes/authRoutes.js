const express = require('express');
const router = express.Router();

// Dummy authentication for demonstration purposes
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Here you would normally check the credentials in your database
  if (email === 'user@example.com' && password === 'password123') {
    return res.json({ message: 'Login successful' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
