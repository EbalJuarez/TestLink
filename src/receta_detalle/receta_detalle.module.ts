import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecetaDetalle } from "./entities/receta_detalle.entitites.js";
import { RecetaDetalleService } from "./receta_detalle.service.js";
import { RecetaDetalleController } from "./receta_detalle.controller.js";
import { RecetaDetalleRepository } from "./receta_detalle.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([RecetaDetalle])],
    controllers: [RecetaDetalleController],
    providers: [RecetaDetalleService, RecetaDetalleRepository],
})
export class RecetaDetalleModule {}