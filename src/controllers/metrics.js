const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/events', async (req, res) => {
    try {
        const events = await Event.find().exec();
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching events' });
    }
});

module.exports = router;