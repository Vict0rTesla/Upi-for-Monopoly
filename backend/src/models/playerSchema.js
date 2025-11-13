import mongo, { Schema } from "mongoose";

const playerSchema = new Schema(
  {
    name: { type: String, require: true },
    balance: { type: Number, require: true },
    color: { type: String, require: true }
  }
)

const Player = mongo.model(playerSchema)

export { Player }
