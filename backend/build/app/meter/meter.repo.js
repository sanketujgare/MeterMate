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
exports.getMeters = exports.getMeterId = exports.updateMeter = void 0;
const meter_schema_1 = __importDefault(require("./meter.schema"));
const updateMeter = (meterId, updatedFields) => __awaiter(void 0, void 0, void 0, function* () {
    const isUpdated = yield meter_schema_1.default.meterModel.findByIdAndUpdate({ _id: meterId }, updatedFields);
    return isUpdated;
});
exports.updateMeter = updateMeter;
const getMeterId = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const meter = yield meter_schema_1.default.meterModel.findOne({
        $and: [{ serviceId: serviceId }, { isAssigned: false }],
    });
    return meter === null || meter === void 0 ? void 0 : meter._id;
});
exports.getMeterId = getMeterId;
const getMeters = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const meters = yield meter_schema_1.default.meterModel.find({ boardId: id });
    return meters;
});
exports.getMeters = getMeters;
exports.default = {
    updateMeter: exports.updateMeter,
    getMeterId: exports.getMeterId,
    getMeters: exports.getMeters,
};
