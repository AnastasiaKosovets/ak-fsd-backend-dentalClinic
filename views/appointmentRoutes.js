const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
const isAdmin = require('../middlewares/isAdmin');

// router.get('/', auth, isDoctor, appointmentController.getAllAppointments);
router.get('/', auth, appointmentController.getAllAppointments);
router.get('/myAppointments', auth, appointmentController.getMyAppointments);
// router.get('/doctorsAppointments', auth, isDoctor, appointmentController.getAppointments);
router.get('/doctorsAppointments', auth, isDoctor, appointmentController.getAppointments);
router.post('/', auth, appointmentController.createAppointment);
router.put('/:id', auth, isAdmin, appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;