const { Treatment } = require('../models');
const treatmentController = {};

treatmentController.getAllTreatments =  async(req, res) => {
    try {
        // This method allow extract all users
        const treatments = await Treatment.findAll();

        return res.json({
            success: true,
            message: "Treatment retrieved",
            data: treatments
        })
    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Treatment can't be retrieved",
                error: error.message
            })    
    }
}

treatmentController.createTreatment = async (req, res) => {
    try{
        const { treatmentName, description, price } = req.body
        const newTreatment = await Treatment.create({
            treatmentName: treatmentName,
            description: description,
            price: price
        });
        return res.json({
            success: true,
            message: "New Treatment was created",
            data: newTreatment
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Treatment can't be created",
            error: error.message
        });
    }
}

treatmentController.updateTreatment = async (req, res) => {

    

    try {
        // In this part we declare parameters to be able to update treatment
        const treatmentId = req.params.id;
        const { treatmentName, description, price, } = req.body;
        
        const updatedTreatment = await Treatment.update({
            treatmentName: treatmentName,
            description: description,
            price: price
        },
        {
            where: {
                id: treatmentId
            }
        });
        return res.json({
                success: true,
                message: "Treatment updated",
                data: updatedTreatment
            });

    } catch (error) {
        return res.status(500).json({
                success: false,
                message: "Treatment can't be updated",
                error: error.message
            })
    }
}

treatmentController.deleteTreatment = async (req, res) => {
    try {
        // According to the ID of treatment and destroy method we can manage method of delete treatment
        const treatmentId = req.params.id;
        const deleteTreatment = await Treatment.destroy({
            where: {
                id: treatmentId
            }
        })
        return res.json({
            success: true,
            message: "Treatment deleted successfully",
            data: deleteTreatment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Treatment can't be deleted",
            error: error.message
        })
        
    }
}
module.exports = treatmentController;