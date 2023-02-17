// backend/routes/api/index.js
const router = require('express').Router();


// Test the API Router Phase 1
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
