const router = require("express").Router();
const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const treatmentRoutes = require('./views/treatmentRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/treatments', treatmentRoutes);

module.exports = router;