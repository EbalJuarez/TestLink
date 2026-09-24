import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetalleFactura } from "./entities/detalle_factura.entities.js";
import { DetalleFacturaService } from "./detalle_factura.service.js";
import { DetalleFacturaController } from "./detalle_factura.controller.js";
import { DetalleFacturaRepository } from "./detalle_factura.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([DetalleFactura])],
    controllers: [DetalleFacturaController],
    providers: [DetalleFacturaService, DetalleFacturaRepository],
})
export class DetalleFacturaModule {}