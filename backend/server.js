const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const assistanceRoutes = require('./routes/assistanceRoutes');
const emailRoutes = require('./email/emailUtils');
const faqRoutes = require('./routes/faqRoutes');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api", assistanceRoutes);
app.use("/api", faqRoutes);
app.use("/api", emailRoutes);
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Use public IP of EC2 for binding
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://${'51.20.135.111'}:${PORT}`);
});

module.exports = server; // Export the server instance for use in deployment
