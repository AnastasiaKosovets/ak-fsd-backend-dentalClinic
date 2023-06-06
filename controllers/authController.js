const authController = {};
// vinculated with User model
const { User } = require('../models');

// Create register part fot New User
authController.register = async (req, res) => {
    try {
        console.log(req.body);
        if ( req.body.password.length < 4 ) {
            return res.send('Password must be longer than 4 characters');
        }
        
    } catch (error) {
        return res.send('Something went wrong creating user' + error.message);
    }
}


module.exports = authController;