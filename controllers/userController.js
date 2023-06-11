const { User } = require("../models");
const userController = {};
// const authController = require("./authController");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");



userController.getAllUsers =  async(req, res) => {
    try {
        const users = await User.findAll();

        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Users cant be retrieved",
                error: error
            })    
    }
}

userController.getAllPatients =  async(req, res) => {
    try {
        // with the filter property, we can make our search more personalized
        const filter = {
            where: {
                role_id: 2
            },
            // excluding information from user profile
            attributes: {

                exclude: ["password", "role_id", "collegialNumber"]
            },
        }
        // filter users by name
        if (req.query.firstName) {
            filter.where.firstName = {
                [Op.like]: "%" + req.query.firstName + "%"
            }
        }
        // filter users by surname
        if (req.query.lastName) {
            filter.where.lastName = {
                [Op.like]: "%" + req.query.lastName + "%"
            }
        }
        // filter users by email
        if (req.query.email) {
            filter.where.email = {
                [Op.like]: "%" + req.query.email + "%"
            }
        }
        // search without filter
        const users = await User.findAll(filter)
        // if user doesn't exist:
        if(users.length == 0) {
            return res.status(404).json({
                success: true,
                message: "No patients found"
            })
        }
        return res.json({
            success: true,
            message: "Patients retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Patients can't be retrieved",
                error: error.message
            })    
    }
}
userController.updateUser = async (req, res) => {

    // let body = req.body;

    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if(!user) {
            return res.json({
                    success: true,
                    message: "User doesn't exist"
                });
        };

        const {email, password, firstName, lastName, document, address, telefonNumber, collegialNumber, role_id} = req.body;
        
        const updatedPassword = bcrypt.hashSync(req.body.password, 8);
        const userUpdated = await User.update(
            {
                email: email,
                password: updatedPassword,
                firstName: firstName,
                lastName: lastName,
                document: document,
                address: address,
                telefonNumber: telefonNumber,
                collegialNumber: collegialNumber
            },
            {
                where: {
                    id: userId
                }
            }
        )
        return res.json({
                success: true,
                message: "User updated",
                data: userUpdated
            });

    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "User can't be updated",
                error: error
            })
    }
}

userController.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({
            where: {
                id: userId
            }
        })
        return res.json({
            success: true,
            message: "User deleted successfully",
            data: deleteUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User can't be deleted",
            error: error
        })
        
    }
}

module.exports = userController;