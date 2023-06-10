const treatmentController = require('../controllers/treatmentController');
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', treatmentController.getAllTreatments);
router.put('/:id', auth, isAdmin, treatmentController.updateTreatment);
router.delete('/:id', auth, isAdmin, treatmentController.deleteTreatment)
module.exports = router;