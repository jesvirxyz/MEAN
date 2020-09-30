const express = require('express');
const router = express.Router();
const Sample = require('../models/index');

router.get('/', async (req, res) => {
    const sample = await Sample.find();
    try {
        res.json(sample);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const sample = new Sample({
        sample: req.body.sample,
    });

    try {
        await sample.save().then(res.redirect('/'));
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
