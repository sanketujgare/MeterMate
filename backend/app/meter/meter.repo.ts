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

export const getMeterByService = async (serviceId: serviceIdI) => {
  const meter = await meterSchema.meterModel.findOne({
    $and: [{ serviceId: serviceId }, { isAssigned: false }],
  });
  return meter;
};
export const getMeters = async (id: id) => {
  const meters = await meterSchema.meterModel.find({ boardId: id });
  return meters;
};
export default {
  updateMeter,
  getMeterByService,
  getMeters,
};
