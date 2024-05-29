import { id } from "../users/user.types";
import meterSchema from "./meter.schema";
import { fieldsToBeUpdated, meterIdI, serviceIdI } from "./meter.type";

export const updateMeter = async (meterId: id, updatedFields: {}) => {
  const isUpdated = await meterSchema.meterModel.findByIdAndUpdate(
    { _id: meterId },
    updatedFields
  );
  return isUpdated;
};

export const getMeterId = async (serviceId: serviceIdI) => {
  const meter = await meterSchema.meterModel.findOne({
    $and: [{ serviceId: serviceId }, { isAssigned: false }],
  });
  return meter?._id;
};

export default {
  updateMeter,
  getMeterId,
};
