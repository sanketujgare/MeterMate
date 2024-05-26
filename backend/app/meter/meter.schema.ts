import { model, Schema } from "mongoose";
import { baseSchema } from "../utility/base.schema";

const meterSchema = new baseSchema({
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
      type: Schema.Types.ObjectId,
      ref: "Bills",
    },
  ],
  isReadingTaken: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
  },
  balanceAmount: {
    type: Number,
  },
  avgConsumption: {
    type: Number,
  },
});

const billsSchema = new baseSchema({
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
  images: [
    {
      type: String,
    },
  ],
});

const billModel = model("MonthlyUsage", billsSchema);
const meterModel = model("Meters", meterSchema);
