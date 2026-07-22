/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search API endpoint
router.get('/', async (req, res, next) => {
    try {
        res.json({ message: "Search API is working" });
    } catch (e) {
        next(e);
    }
});

module.exports = router;
