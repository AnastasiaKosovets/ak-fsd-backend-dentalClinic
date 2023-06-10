const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', auth, userController.getAllUsers);
router.put('/:id', auth, isAdmin, userController.updateUser);
router.delete('/:id', auth, isAdmin, userController.deleteUser);

module.exports = router;
