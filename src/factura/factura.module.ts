import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Factura } from "./entities/factura.entities.js";
import { FacturaService } from "./factura.service.js";
import { FacturaController } from "./factura.controller.js";
import { FacturaRepository } from "./factura.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Factura])],
    controllers: [FacturaController],
    providers: [FacturaService, FacturaRepository],
})
export class FacturaModule {}