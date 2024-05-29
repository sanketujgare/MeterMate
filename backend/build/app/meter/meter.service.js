"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeterId = exports.updateMeter = void 0;
const meter_repo_1 = __importDefault(require("./meter.repo"));
const meter_responces_1 = require("./meter.responces");
const updateMeter = (meterId, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUpdated = yield meter_repo_1.default.updateMeter(meterId, updatedFields);
        console.log("meterid -", meterId, "fields - ", updatedFields);
        if (!isUpdated)
            return meter_responces_1.meterResponces.METER_NOT_UPDATED;
        return isUpdated;
    }
    catch (e) {
        console.log(e);
        throw meter_responces_1.meterResponces.METER_NOT_UPDATED;
    }
});
exports.updateMeter = updateMeter;
const getMeterId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const meterId = yield meter_repo_1.default.getMeterId(serviceId);
        return meterId;
    }
    catch (e) {
        throw e;
    }
});
exports.getMeterId = getMeterId;
exports.default = {
    updateMeter: exports.updateMeter,
    getMeterId: exports.getMeterId,
};
