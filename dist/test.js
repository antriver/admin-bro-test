"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const typeorm_2 = require("@admin-bro/typeorm");
const class_validator_1 = require("class-validator");
const admin_bro_1 = __importDefault(require("admin-bro"));
const AdminBroExpress = __importStar(require("@admin-bro/express"));
const Car_1 = require("./entities/Car");
const CarDealer_1 = require("./entities/CarDealer");
const CarBuyer_1 = require("./entities/CarBuyer");
typeorm_2.Resource.validate = class_validator_1.validate;
(() => __awaiter(void 0, void 0, void 0, function* () {
    admin_bro_1.default.registerAdapter({ Database: typeorm_2.Database, Resource: typeorm_2.Resource });
    const connection = yield typeorm_1.createConnection({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'admin-bro-test',
        entities: [
            Car_1.Car,
            CarDealer_1.CarDealer,
            CarBuyer_1.CarBuyer
        ],
        synchronize: true
    });
    // Applying connection to model
    Car_1.Car.useConnection(connection);
    CarDealer_1.CarDealer.useConnection(connection);
    CarBuyer_1.CarBuyer.useConnection(connection);
    const adminBro = new admin_bro_1.default({
        // databases: [connection],
        resources: [
            Car_1.Car,
            CarDealer_1.CarDealer,
            CarBuyer_1.CarBuyer
        ],
        rootPath: '/admin',
    });
    const app = express_1.default();
    const router = AdminBroExpress.buildRouter(adminBro);
    app.use(adminBro.options.rootPath, router);
    app.listen(3000);
}))();
//# sourceMappingURL=test.js.map