// ✅ Correcto
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cita } from "./entities/cita.entities.js";
import { CitaController } from "./cita.controller.js";
import { CitaService } from "./cita.service.js";
import { CitaRepository } from "./cita.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Cita])],
    controllers: [CitaController],
    providers: [CitaService, CitaRepository], // 👈 ambos, no solo el service
})
export class CitaModule {}