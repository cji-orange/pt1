const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://practice-tracker-frontend.vercel.app', 'https://pt1-rho.vercel.app'],
    credentials: true
}));

// ... rest of the existing code ... 