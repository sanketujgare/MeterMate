import { boolean } from "zod";
import meterRepo from "./meter.repo";
import { meterResponces } from "./meter.responces";
import { fieldsToBeUpdated, meterIdI, serviceIdI } from "./meter.type";
import { id } from "../users/user.types";
export const updateMeter = async (meterId: any, updatedFields: {}) => {
  try {
    const isUpdated = await meterRepo.updateMeter(meterId, updatedFields);
    if (!isUpdated) return meterResponces.METER_NOT_UPDATED;
    return isUpdated;
  } catch (e) {
    throw meterResponces.METER_NOT_UPDATED;
  }
};

export const getMeterByService = async (serviceId: serviceIdI) => {
  try {
    const meter = await meterRepo.getMeterByService(serviceId);
    return meter;
  } catch (e) {
    throw meterResponces.METER_NOT_FOUND;
  }
};

export default {
  updateMeter,
  getMeterByService,
};
