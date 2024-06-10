import { userResponces } from "../users/user.responces";
import { UserResponcesI } from "../users/user.types";
import { meterResponcesI } from "./meter.type";

export const meterResponces: meterResponcesI = {
  METER_NOT_UPDATED: {
    statusCode: 404,
    message: "METER DOES NOT UPDATED",
  },
  METER_NOT_FOUND: {
    statusCode: 404,
    message: "METER NOT FOUND",
  },
  METER_NOT_AVAILABLE: {
    statusCode: 404,
    message: "METER OF_THIS_SERIVICE IS NOT AVAILABLE",
  },
};
