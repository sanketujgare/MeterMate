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
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const connectToMongo_1 = require("./connections/connectToMongo");
const board_schema_1 = __importDefault(require("./boards/board.schema"));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = (0, express_1.default)();
        // registerMiddlewares(app);
        yield (0, connectToMongo_1.connectDB)();
        const newBoard = new board_schema_1.default({
            boardName: "Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL)",
            totalCustomers: 0,
            email: "info@mahadiscom.in",
            services: [
                {
                    meterCategory: "Household meter",
                    meterType: "Solar meter",
                    basePrice: 8.5,
                    discount: 0,
                },
                {
                    meterCategory: "Household meter",
                    meterType: "Regular meter",
                    basePrice: 6.5,
                    discount: 0,
                },
            ],
        });
        newBoard.save();
        const { PORT } = process.env;
        app.listen(PORT, () => {
            console.log(`SERVER UP AND RUNNIG ON THE PORT ${PORT}`);
        });
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
});
exports.startServer = startServer;
