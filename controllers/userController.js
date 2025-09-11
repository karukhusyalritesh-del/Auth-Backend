const userModel = require("../models/userModel");

const getUserData = async (req, res) => {
    try {
        const userId = req.userId; // ← get it from middleware

        const user = await userModel.findById(userId); // use findById instead of findOne({userId})
        if (!user) {
            return res.json({ success: false, message: "User not Found" });
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

module.exports = getUserData;
