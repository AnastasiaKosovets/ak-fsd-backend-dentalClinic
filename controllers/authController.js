const authController = {};
// vinculated with User model
const { User } = require('../models');

// Create register part fot New User
authController.register = async (req, res) => {
    try {
        console.log(req.body);
        // if (req.body.password.length < 4) {
        //     return res.send('Password must be longer than 4 characters');
        // } else if (req.body.document.length < 9){
        //     return res.send('Invalid document');
        // } else if (req.body.telefonNumber.length < 9){
        //     return res.send('Wrong phone number lenght')
        // } else if (req.body.document.length < 9){
        //     return res.send('Invalid collegiate number')
        // }
        
        const newUser = await User.create ({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            document: req.body.document,
            address: req.body.address,
            telefonNumber: req.body.telefonNumber,
            collegialNumber: req.body.collegialNumber,
            role_id: 1
        });
        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating user' + error.message);
    }
}

authController.login = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be logged",
            error: error
        })
        
    }
}

module.exports = authController;