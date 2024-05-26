import { model, Schema } from "mongoose";
import { baseSchema } from "../utility/base.schema";

const userSchema = new baseSchema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  fullname: {
    type: String,
  },
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
    required: true,
    default: ["User"],
  },
  profilePic: {
    type: String,
  },
  empId: {
    type: Number,
    required: true,
  },
  metersAssigned: {
    type: [
      {
        meterId: Schema.Types.ObjectId,
        ref: "Meters",
      },
    ],
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
});

const userModel = model("Users", userSchema);
