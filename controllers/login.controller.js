const loginUseCase = require("../usecases/login.usecase");

const validate = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await loginUseCase.userValidation(username, password);
        const token = loginUseCase.createToken(user);
        res.status(200).json({ access_token: token });
    } catch (error) {
        if (error.name === "BadCredentialsError") {
            res.status(401).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

const userInfo = (req, res) => {
    res.status(200).json(req.user);
};

module.exports = {
    validate,
    userInfo,
};
