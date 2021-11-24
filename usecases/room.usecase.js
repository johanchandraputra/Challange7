const models = require("../models");

class RequiredFieldsMissingError extends Error {
  constructor(message) {
    super(message);
    this.name = "RequiredFieldsMissingError";
  }
}

class RoomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "RoomNotFoundError";
  }
}

class ForbiddenActionError extends Error {
  constructor(message) {
    super(message);
    this.name = "ForbiddenActionError";
  }
}

async function createRoom(name, numberOfRounds, creator) {
  try {
    if (!name) {
      throw new RequiredFieldsMissingError("name is required");
    }
    if (!numberOfRounds) {
      throw new RequiredFieldsMissingError("numberOfRounds is required");
    }
    if (!creator) {
        throw new RequiredFieldsMissingError("Creator userId is required");
      }

    return await models.rooms.create({
      room_name: name,
      number_of_round: numberOfRounds,
      creator_user_id: creator
    });

  } catch (error) {
    throw error;
  }
}

async function removeRoom(user, roomId) {
  try {
    if (!user) {
      throw new RequiredFieldsMissingError("User is required");
    }

    if (!roomId) {
      throw new RequiredFieldsMissingError("roomId is required");
    }

    const room = await models.rooms.findOne({
      where: {
        id: roomId,
      },
    });

    if (!room) {
      throw new RoomNotFoundError("Room not found");
    }

    if (room.creator_user_id !== user) {
      throw new ForbiddenActionError("Only creator can remove room");
    }

    await room.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRoom,
  removeRoom,
};
