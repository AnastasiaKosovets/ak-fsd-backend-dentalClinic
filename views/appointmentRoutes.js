const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', appointmentController.getAllAppointments);
// router.post('/', auth, isAdmin, treatmentController.createTreatment);
// router.put('/:id', auth, isAdmin, treatmentController.updateTreatment);
// router.delete('/:id', auth, isAdmin, treatmentController.deleteTreatment);

module.exports = router;