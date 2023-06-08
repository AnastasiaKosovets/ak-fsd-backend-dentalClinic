const { Treatment } = require('../models');
const treatmentController = {};

treatmentController.getAllTreatments =  async(req, res) => {
    try {
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
                error: error
            })    
    }
}

module.exports = treatmentController;