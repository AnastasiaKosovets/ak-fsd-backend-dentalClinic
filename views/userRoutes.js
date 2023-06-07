const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, userController.getAllUsers);
router.put('/:id', auth, isAdmin, userController.updateUser);

module.exports = router;
