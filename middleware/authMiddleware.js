const jwt = require('jsonwebtoken');
//const SECRET_KEY = 'expert';

const authCheck = (req, res, next) => {
    try {

        //const token = req.query.token;

        //headers

        const token=req.headers["token"];
        // console.log("Token received:", token);

        if (!token) {
            return res.status(401).send({ error: "Token not found" });
        }

        const data = jwt.verify(token, process.env.secure);
        // console.log("gfdfgfdgg:", data);
       req.email=data.email
        next(); //use for authorization 
    } catch (error) {
        console.error("Error during token verification:", error);
        res.status(401).send({ message: "Invalid or expired token", error: error.message });
    }
};

module.exports = { authCheck };
