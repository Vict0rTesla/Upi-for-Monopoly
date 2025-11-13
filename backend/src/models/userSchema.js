import mongo, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  }
)

const Player = mongo.model(playerSchema)

export { Player }
