const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());

// Use auth routes
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
