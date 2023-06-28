const isDoctor = (req, res, next) => {
    try {
        // if you aren't Doctor you don't have access
        if (req.roleId == 3 || req.roleId == 1) {
            next();
            return;
        }
        return res.json({
                    success: true,
                    message: "You don't have permissions"
                });
       
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}

module.exports = isDoctor;