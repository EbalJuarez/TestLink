import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Paciente } from "./entities/paciente.entities.js";
import { PacienteService } from "./paciente.service.js";
import { PacienteController } from "./paciente.controller.js";
import { PacienteRepository } from "./paciente.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Paciente])],
    controllers: [PacienteController],
    providers: [PacienteService, PacienteRepository],
})
export class PacienteModule {}