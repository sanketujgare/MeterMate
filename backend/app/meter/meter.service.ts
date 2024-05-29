import { boolean } from "zod";
import meterRepo from "./meter.repo";
import { meterResponces } from "./meter.responces";
import { fieldsToBeUpdated, meterIdI, serviceIdI } from "./meter.type";

export const updateMeter = async (meterId: any, updatedFields: {}) => {
  try {
    const isUpdated = await meterRepo.updateMeter(meterId, updatedFields);
    console.log("meterid -", meterId, "fields - ", updatedFields);
    if (!isUpdated) return meterResponces.METER_NOT_UPDATED;
    return isUpdated;
  } catch (e) {
    console.log(e);
    throw meterResponces.METER_NOT_UPDATED;
  }
};

export const getMeterId = async (serviceId: serviceIdI) => {
  try {
    const meterId = await meterRepo.getMeterId(serviceId);
    return meterId;
  } catch (e) {
    throw e;
  }
};
export default {
  updateMeter,
  getMeterId,
};
