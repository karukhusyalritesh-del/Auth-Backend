const jwt = require('jsonwebtoken');

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            // store userId in req.userId instead of req.body.userId
            req.userId = tokenDecode.id;
            next();
        } else {
            return res.json({ success: false, message: "Not Authorized. Login Again." });
        }
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

module.exports = userAuth;
