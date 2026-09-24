import { Injectable, NotFoundException } from "@nestjs/common";
import { MedicamentoRepository } from "./medicamento.repository.js";
import { CrearMedicamentoDto } from "./dto/create-medicamento.dto.js";
import { ActualizarMedicamentoDto } from "./dto/update-medicamento.dto.js";

@Injectable()
export class MedicamentoService {
    constructor(private readonly medicamentoRepository: MedicamentoRepository) {}

    obtenerTodos() {
        return this.medicamentoRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const medicamento = await this.medicamentoRepository.findById(id);
        if (!medicamento) {
            throw new NotFoundException(`Medicamento con id ${id} no encontrado`);
        }
        return medicamento;
    }

    crear(dto: CrearMedicamentoDto) {
        return this.medicamentoRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarMedicamentoDto) {
        await this.obtenerPorId(id);
        return this.medicamentoRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.medicamentoRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}