const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const assistanceRoutes = require('./routes/assistanceRoutes');
const faqRoutes = require('./routes/faqRoutes');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api", assistanceRoutes);
app.use("/api", faqRoutes);

const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));