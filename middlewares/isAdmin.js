const isAdmin = (req, res, next) => {
    try {
        // if you aren't Admin you can't modify users
        if (req.roleId !== 2) {
            return res.json({
                    success: true,
                    message: "You don't have permissions"
                });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "You don't have permissions",
            error: error
        })
    }
}

module.exports = isAdmin;