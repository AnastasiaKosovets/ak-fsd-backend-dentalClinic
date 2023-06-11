// const { Appointment } = require('../models');
const { Appointment, User, Treatment } = require('../models');
const appointmentController = {};
const authController = require("./authController");
const isAdmin = require('../middlewares/isAdmin');

appointmentController.getMyAppointment =  async(req, res) => {
    try {
        // This method extract appointment of user
        const userId = req.userId;
        const getMyAppointment = await Appointment.findByPk(userId,{
            attributes: {
                exclude: ["id", "createdAt", "updatedAt"]
            }
        });

        return res.json({
            success: true,
            message: "Appointment retrieved",
            data: getMyAppointment
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Appointment can't be retrieved",
                error: error.message
            })    
    }
}

appointmentController.getAppointment =  async(req, res) => {
    try {
        // With this method Doctor can see how many appointments he has
        const {userId} = req;
        const getAppointment = await Appointment.findAll({
            where: {
                user_id1: userId,
            },
            attributes: {
                exclude: ["id", "createdAt", "updatedAt"]
            }
        });

        return res.json({
            success: true,
            message: "Appointment retrieved",
            data: getAppointment
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Appointment can't be retrieved",
                error: error.message
            })    
    }
}

appointmentController.getAllAppointmentDoctor =  async(req, res) => {
    try {
        // This part allow acces to all appointments by Doctor
        const appointments = await Appointment.findAll();

        return res.json({
            success: true,
            message: "Appointment retrieved",
            data: appointments
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Appointment can't be retrieved",
                error: error.message
            })    
    }
}

appointmentController.createAppointment = async (req, res) => {
    try{
        // This part allow acces to create new appointment
        const { user_id1, user_id2, treatment_id, price, date } = req.body;
        const newAppointment = await Appointment.create({
            user_id1: user_id1,
            user_id2: user_id2,
            treatment_id: treatment_id,
            price: price,
            date: date
        });
        return res.json({
            success: true,
            message: "New Appointment was created",
            data: newAppointment
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Appointment can't be created",
            error: error.message
        });
    }
}

appointmentController.updateAppointment = async (req, res) => {

    

    try {
        // With appointment Id and this method Admin can update an appointment
        const appointmentId = req.params.id;
        const { user_id1, user_id2, treatment_id, price, date } = req.body
        
        const updatedAppointment = await Appointment.update({
            user_id1: user_id1,
            user_id2: user_id2,
            treatment_id: treatment_id,
            price: price,
            date: date
        },
        {
            where: {
                id: appointmentId
            }
        });
        return res.json({
                success: true,
                message: "Appointment updated",
                data: updatedAppointment
            });

    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Appointment can't be updated",
                error: error.message
            })
    }
}

appointmentController.deleteAppointment = async (req, res) => {
    try {
        // According to the ID of appointment and destroy method we can manage appontments and delete one declaring his ID
        const appointmentId = req.params.id;
        const deleteAppointment = await Appointment.destroy({
            where: {
                id: appointmentId
            }
        })
        return res.json({
            success: true,
            message: "Appointment deleted successfully",
            data: deleteAppointment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointment can't be deleted",
            error: error.message
        })
        
    }
}
module.exports = appointmentController;