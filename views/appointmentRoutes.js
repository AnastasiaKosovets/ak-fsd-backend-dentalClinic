const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
const isAdmin = require('../middlewares/isAdmin');


// router.get('/', appointmentController.getAllAppointments);
router.get('/', auth, isDoctor, appointmentController.getAllAppointmentDoctor);
router.get('/:id', auth, appointmentController.getMyAppointment);
router.post('/', appointmentController.createAppointment);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;