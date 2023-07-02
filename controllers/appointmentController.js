const { Appointment, User, Treatment } = require('../models');
const appointmentController = {};

appointmentController.getMyAppointments =  async(req, res) => {
    try {
        const appointments = await Appointment.findAll({
            where: {
                patient_id: req.userId
            },
            // attributes: ["date"],
            include: [
                {
                    model: User,
                    as: "patient",
                    attributes: ["firstName", "lastName"]
                },
                {
                model: Treatment,
                as: "treatment",
                attributes: ["treatmentName", "description"]
            },
            {
                model: User,
                as: "doctor",
                attributes: ["firstName", "lastName"]
            }
        ]
        })
        return res.json({
            success: true,
            message: "Appointment retrieved",
            data: appointments
            // meter aqui el user para que nos lo devuelva
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error error",
            error: error.message
        })
    }
}

appointmentController.getAppointments =  async(req, res) => {
    try {
        // With this method Doctor can see how many appointments he has
        const {userId} = req;
        const getAppointment = await Appointment.findAll({
            where: {
                doctor_id: userId,
            },
            attributes: ["date"],
            include: [
                {
                    model: User,
                    as: "patient",
                    attributes: ["firstName", "lastName"]
                },
                {
                model: Treatment,
                as: "treatment",
                attributes: ["treatmentName", "description"]
            },
            {
                model: User,
                as: "doctor",
                attributes: ["firstName", "lastName"]
            }
        ]
            // attributes: {
            //     exclude: ["id", "createdAt", "updatedAt"]
            // }
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

appointmentController.getAllAppointments =  async(req, res) => {
    try {
        // This part allow acces to all appointments by Doctor
    
        const appointments = await Appointment.findAll({
            
            // attributes: ["date"],
            include: [
                {
                    model: User,
                    as: "patient",
                    attributes: ["firstName", "lastName"]
                },
                {
                model: Treatment,
                as: "treatment",
                attributes: ["treatmentName", "description"]
            },
            {
                model: User,
                as: "doctor",
                attributes: ["firstName", "lastName"]
            }
        ]
        });

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
        const userPatient = req.userId
        // This part allow acces to create new appointment
        const { doctor_id, treatment_id, date } = req.body;
        const userDentis = await User.findByPk(doctor_id);

        if(userDentis.role_id !==3){
            return res.json({
                success: true,
                message: "Incorrect doctor"
            })
        }
        const newAppointment = await Appointment.create({
            doctor_id: doctor_id,
            patient_id: userPatient,
            treatment_id: treatment_id,
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
        const { doctor_id, patient_id, treatment_id, price, date } = req.body
        
        const updatedAppointment = await Appointment.update({
            doctor_id: doctor_id,
            patient_id: patient_id,
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
        // const userId = req.userId;
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