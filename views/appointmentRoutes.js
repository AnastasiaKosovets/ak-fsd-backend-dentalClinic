const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const auth = require('../middlewares/verifyToken');
const isDoctor = require('../middlewares/isDoctor');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', auth, isAdmin, appointmentController.getAllAppointments);
router.get('/myAppointment', auth, appointmentController.getMyAppointment);
router.get('/doctorsAppointment', auth, isDoctor, appointmentController.getAppointment);
router.post('/', auth, appointmentController.createAppointment);
router.put('/:id', auth, isAdmin, appointmentController.updateAppointment);
router.delete('/:id', auth, isAdmin, appointmentController.deleteAppointment);

module.exports = router;