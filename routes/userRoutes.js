const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect, authorizeRole } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/customer-dashboard', protect, authorizeRole('customer'), (req, res) => {
    res.json({ message: 'Welcome to Customer Dashboard' });
});

router.get('/seller-dashboard', protect, authorizeRole('seller'), (req, res) => {
    res.json({ message: 'Welcome to Seller Dashboard' });
});

module.exports = router;
