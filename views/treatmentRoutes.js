const treatmentController = require('../controllers/treatmentController');
const router = require('express').Router();

router.get('/', treatmentController.getAllTreatments);

module.exports = router;