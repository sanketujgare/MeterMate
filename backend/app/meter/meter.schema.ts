import { model, Schema } from "mongoose";

const meterSchema = new Schema({
  boardId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Board",
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },
  consumerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  bills: [
    {
      billId: {
        type: Schema.Types.ObjectId,
        ref: "Bill",
      },
    },
  ],
  isReadingTaken: {
    type: Boolean,
    default: false,
  },
  isActive: Boolean,
  isAssigned: Boolean,
  balanceAmount: Number,
  avgConsumption: Number,
});

const billsSchema = new Schema({
  meterId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Meter",
  },
  date: {
    type: Date,
    required: true,
  },
  unitsConsumed: {
    type: Number,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  images: [String],
});

const billsModel = model("Bill", billsSchema);
const meterModel = model("Meter", meterSchema);

export default {
  billsModel,
  meterModel,
};
