import { model, Schema } from "mongoose";
import { baseSchema } from "../utility/base.schema";

const boardSchema = new baseSchema({
  boardName: {
    type: String,
  },
  totalCustomers: {
    type: Number,
  },
  email: {
    type: String,
  },
  services: [
    {
      meterCategory: {
        type: String,
      },
      meterType: {
        type: String,
      },
      basePrice: {
        type: Number,
      },
      discount: {
        type: Number,
      },
    },
  ],
});
const boardModel = model("Boards", boardSchema);
export default boardModel;
