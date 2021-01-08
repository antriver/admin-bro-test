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
exports.Car = exports.CarType = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const CarDealer_1 = require("./CarDealer");
const CarBuyer_1 = require("./CarBuyer");
var CarType;
(function (CarType) {
    CarType["MODERN"] = "modern";
    CarType["OLD"] = "old";
    CarType["GHOST"] = "ghost";
})(CarType = exports.CarType || (exports.CarType = {}));
let Car = class Car extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDefined(),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Min(0),
    class_validator_1.Max(15),
    __metadata("design:type", Number)
], Car.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Min(0),
    class_validator_1.Max(15),
    __metadata("design:type", Number)
], Car.prototype, "stringAge", void 0);
__decorate([
    typeorm_1.Column({ name: 'street_number', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "streetNumber", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: CarType,
        default: CarType.GHOST,
    }),
    __metadata("design:type", String)
], Car.prototype, "carType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => CarDealer_1.CarDealer, (carDealer) => carDealer.cars),
    __metadata("design:type", CarDealer_1.CarDealer)
], Car.prototype, "carDealer", void 0);
__decorate([
    typeorm_1.RelationId((car) => car.carDealer),
    __metadata("design:type", Number)
], Car.prototype, "carDealerId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => CarBuyer_1.CarBuyer, (carBuyer) => carBuyer.cars),
    __metadata("design:type", CarBuyer_1.CarBuyer)
], Car.prototype, "carBuyer", void 0);
__decorate([
    typeorm_1.RelationId((car) => car.carBuyer),
    __metadata("design:type", Number)
], Car.prototype, "carBuyerId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Car.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Car.prototype, "updatedAt", void 0);
Car = __decorate([
    typeorm_1.Entity()
], Car);
exports.Car = Car;
//# sourceMappingURL=Car.js.map