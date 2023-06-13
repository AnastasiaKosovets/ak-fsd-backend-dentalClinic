
// vinculated with User model
const { User } = require('../models');
// encrypt password of user register
const bcrypt = require('bcrypt');
// create token function
const jwt = require('jsonwebtoken');
const authController = {};

// Create register part fot New User
authController.register = async (req, res) => {
    // Conditionals to correct register dates
    try {
        switch (true) {
            case req.body.password.length < 4:
                return res.send('Password must be longer than 4 characters');
            case req.body.document.length < 9:
                return res.send('Invalid document');
            case req.body.telefonNumber.length < 9:
                return res.send('Wrong phone number lenght');
            case req.body.collegialNumber.length < 9:
                return res.send('Invalid collegiate number');
            default:
                console.log('Something went wrong with your register')
            
        }
        console.log("hola");
        // Part where encrypc password
        const newPassword = bcrypt.hashSync(req.body.password, 8);
        const newUser = await User.create ({
            email: req.body.email,
            password: newPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            document: req.body.document,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            telefonNumber: req.body.telefonNumber,
            collegialNumber: req.body.collegialNumber,
            role_id: 2
        });


         // Esta expresión regular garantiza que la contraseña cumpla con los siguientes requisitos:
    // Al menos una letra mayúscula.
    // Al menos una letra minúscula.
    // Al menos un número.
    // Al menos un carácter especial (@, $, !, %, *, ?, &).
    // Longitud entre 8 y 14 caracteres. 

    //  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    //  const isValidPassword = passwordRegex.test(password)
    //  if (!isValidPassword) {
    //      return res.json({
    //         success: true,
    //         message: "Not a valid password"
    //      })
    //  }
    
    //     // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // const isValidEmail = emailRegex.test(email);

        // if (!isValidEmail) {
        //     return res.json({
        //         success: true,
        //         message: "Not a valid email"
        //     })
        // }


        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating user ' + error.message);
    }
}

authController.login = async (req, res) => {
    try {
        // Part of log in User
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.json({
                success: true,
                message: "Wrong email"
            });
        }
        // Validation of password
        const isMatch = bcrypt.compareSync(password, user.password);

        if(!isMatch) {
            return res.json({
                success: true,
                message: "Wrong password"
            })
        }
        // Token part declared
        const token = jwt.sign({
            userId: user.id,
            roleId: user.role_id,
            email: user.email
        },
        'secret',
        {
            expiresIn: "2h"
        });
        console.log('Token is: ' + token);

        return res.json({
            success: true,
            message: "User logged",
            token: token
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be logged",
            error: error
        })
        
    }
}

module.exports = authController;