import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tratamiento } from "./entitites/tratamiento.entities.js";
import { TratamientoService } from "./tratamiento.service.js";
import { TratamientoController } from "./tratamiento.controller.js";
import { TratamientoRepository } from "./tratamiento.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Tratamiento])],
    controllers: [TratamientoController],
    providers: [TratamientoService, TratamientoRepository],
})
export class TratamientoModule {}