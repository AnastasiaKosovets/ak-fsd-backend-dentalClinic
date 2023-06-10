const { User } = require("../models");
const userController = {};
// const authController = require("./authController");
const bcrypt = require("bcrypt");



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
                collegialNumber: collegialNumber,
                role_id: role_id
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