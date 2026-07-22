/*jshint esversion: 8 */
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Search API endpoint with category filtering
router.get('/', async (req, res, next) => {
    try {
        // Step 1: Connect to MongoDB database
        const db = await connectToDatabase();
        const collection = db.collection('gifts');

        // Step 2: Extract query parameters (e.g., name, category, condition, age_years)
        const { name, category, condition, age_years } = req.query;
        
        // Build the query object dynamically
        let query = {};
        
        if (name && name.trim() !== '') {
            query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
        }
        if (category && category.trim() !== '') {
            query.category = category;
        }
        if (condition && condition.trim() !== '') {
            query.condition = condition;
        }
        if (age_years && !isNaN(age_years)) {
            query.age_years = { $lte: Number(age_years) };
        }

        // Step 3: Fetch the filtered gifts from the database
        const gifts = await collection.find(query).toArray();

        // Step 4: Return the filtered results as JSON
        res.json(gifts);
    } catch (e) {
        console.error('Error in search API:', e);
        next(e);
    }
});

module.exports = router;
