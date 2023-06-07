const { User } = require("../models");
const userController = {};
const authController = require("./authController");



userController.getAllUsers =  async(req, res) => {
    try {
        const users = await User.findAll();

        return res.json({
            success: true,
            message: "users retrieved",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Users cant be retrieved",
                error: error
            }
        )    
    }
}

userController.updateUser = async (req, res) => {

    // let body = req.body;

    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if(!user) {
            return res.json(
                {
                    success: true,
                    message: "User doesn't exist"
                }
            );
        };

        const {email, password, firstName, lastName, document, address, telefonNumber, collegialNumber, role_id} = req.body;
        
        const userUpdated = await User.update(
            {
                email: email,
                password: password,
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
        return res.json(
            {
                success: true,
                message: "User updated",
                data: userUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "User can't be updated",
                error: error
            }
        )
    }
}

module.exports = userController;