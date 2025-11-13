import mongo, { Schema } from "mongoose";

const gameSchema = new Schema(
  {
    host_id: { type: String },
    startingMoney: { type: Number, default: 1500 },
  }
)

const Game = mongo.model(gameSchema)

export { Game }
