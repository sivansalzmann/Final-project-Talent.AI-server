import { Schema, model } from "mongoose";

const usersSchema = new Schema(
  {
    googleID: { type: String, require: true },
    avatar: { type: String },
    phone: { type: String },
    email: { type: String },
    full_name: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    gender: { type: String },
    birth_year: { type: Number },
    birth_date: { type: String },
    isCandidate: { type: Boolean },
    isCompany: { type: Boolean },
    companyName: { type: String },
  },
  { collection: "users" }
);

const UsersCollection = model("Users", usersSchema);
export { UsersCollection };
