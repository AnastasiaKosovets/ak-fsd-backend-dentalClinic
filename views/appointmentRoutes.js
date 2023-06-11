const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', appointmentController.getAllAppointments);
router.get('/', auth, isDoctor, appointmentController.getAllAppointmentDoctor);
router.get('/', auth, isAdmin, appointmentController.getAllAppointmentDoctor);
router.get('/myAppointment', auth, appointmentController.getMyAppointment);
router.get('/doctorsAppointment', auth, isDoctor, appointmentController.getAppointment);
router.post('/', auth, isAdmin, appointmentController.createAppointment);
router.put('/:id', auth, isAdmin, appointmentController.updateAppointment);
router.delete('/:id', auth, isAdmin, appointmentController.deleteAppointment);

module.exports = router;