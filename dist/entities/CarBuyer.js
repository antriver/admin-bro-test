"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuyer = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Car_1 = require("./Car");
let CarBuyer = class CarBuyer extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CarBuyer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], CarBuyer.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => Car_1.Car, (car) => car.carDealer),
    __metadata("design:type", Array)
], CarBuyer.prototype, "cars", void 0);
CarBuyer = __decorate([
    typeorm_1.Entity()
], CarBuyer);
exports.CarBuyer = CarBuyer;
//# sourceMappingURL=CarBuyer.js.map