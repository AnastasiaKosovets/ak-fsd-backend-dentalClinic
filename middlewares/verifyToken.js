// create token 
const jwt = require('jsonwebtoken');
// create conditional for token 
// const token = jwt.sign({ userId: 9, roleId: 1}, 'secret');
const auth = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            return res.json({
                success: true,
                message: "Error, token not provided"
            })
        }
        const token = bearerToken.split(" ")[1];
        const decoded = jwt.verify(token, 'secret');
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        // verify information of login
        next();

        } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Invalid token",
            error: error
        })
    }
}

module.exports = auth;