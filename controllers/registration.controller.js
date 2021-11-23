const registrationUseCase = require("../usecases/registration.usecase");

const registration = async (req, res) => {
    try {
      const createUser = await registrationUseCase.userRegistration(req.body);
      res.status(201).json(createUser);
    } catch (error) {
      if (error.name === "RequiredFieldsMissingError") {
        res.status(400).json({ error: error.message });
        return;
      }
      if (error.name == "UserAlreadyExistsError") {
        res.status(409).json({ error: error.message });
        return;
      }
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    registration,
  };