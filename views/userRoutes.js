const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');

// acuerdate de volver a poder isAdmin EN GETuSERS
router.get('/', auth, isAdmin, userController.getAllUsers);
// router.get('/patients', auth, isDoctor, userController.getAllPatients);
router.get('/patients', auth, userController.getAllPatients);
router.get('/doctors', userController.getAllDoctors);
// router.get('/doctors', auth, userController.getAllDoctors);
// router.get('/profile', userController.getProfile);
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateUser);
// router.delete('/:id', auth, userController.deleteUser);
router.delete('/:id', auth, isAdmin, userController.deleteUser);

module.exports = router;

