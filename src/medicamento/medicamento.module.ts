import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Medicamento } from "./entities/medicamento.entities.js";
import { MedicamentoService } from "./medicamento.service.js";
import { MedicamentoController } from "./medicamento.controller.js";
import { MedicamentoRepository } from "./medicamento.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Medicamento])],
    controllers: [MedicamentoController],
    providers: [MedicamentoService, MedicamentoRepository],
})
export class MedicamentoModule {}