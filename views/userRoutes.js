const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isDoctor = require('../middlewares/isDoctor');


router.get('/', auth, isAdmin, userController.getAllUsers);
router.get('/patients', auth, isDoctor, userController.getAllPatients);
router.put('/:id', auth, isAdmin, userController.updateUser);
router.delete('/:id', auth, isAdmin, userController.deleteUser);

module.exports = router;
