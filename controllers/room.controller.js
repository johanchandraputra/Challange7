const roomsUseCase = require("../usecases/room.usecase");

const create = async (req, res) => {
  try {
    const { room_name, number_of_round, creator_user_id } = req.body;
    const room = await roomsUseCase.createRoom(room_name, number_of_round, creator_user_id);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await roomsUseCase.removeRoom(req.user.id, id);
    console.log("success Deleted");
    res.status(204).json();
  } catch (error) {
    if (error.name === "RequiredFieldsMissingError") {
      res.status(401).json({ error: error.message });
      return;
    }
    if (error.name === "ForbiddenActionError") {
      res.status(403).json({ error: error.message });
      return;
    }
    if (error.name === "RoomNotFoundError") {
      res.status(404).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  remove,
};
