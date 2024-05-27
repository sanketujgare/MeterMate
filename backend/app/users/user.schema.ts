import { model, Schema } from "mongoose";
import { baseSchema } from "../utility/base.schema";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  fullname: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    default: ["User"],
  },
  profilePic: String,
  empId: {
    type: Number,
  },
  metersAssigned: [
    {
      meterId: {
        type: Schema.Types.ObjectId,
        ref: "Meter",
      },
    },
  ],
  address: {
    city: String,
    state: String,
    country: String,
    zipCode: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const userModel = model("User", userSchema);
export default userModel;
