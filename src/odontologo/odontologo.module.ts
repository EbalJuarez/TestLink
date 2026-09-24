import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Odontologo } from "./entities/odontologo.entitites.js";
import { OdontologoService } from "./odontologo.service.js";
import { OdontologoController } from "./odontologo.controller.js";
import { OdontologoRepository } from "./odontologo.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Odontologo])],
    controllers: [OdontologoController],
    providers: [OdontologoService, OdontologoRepository],
})
export class OdontologoModule {}