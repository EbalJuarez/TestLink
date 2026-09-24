import { Injectable, NotFoundException } from "@nestjs/common";
import { PacienteRepository } from "./paciente.repository.js";
import { CrearPacienteDto } from "./dto/create-paciente.dto.js";
import { ActualizarPacienteDto } from "./dto/update-paciente.dto.js";

@Injectable()
export class PacienteService {
    constructor(private readonly pacienteRepository: PacienteRepository) {}

    obtenerTodos() {
        return this.pacienteRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const paciente = await this.pacienteRepository.findById(id);
        if (!paciente) {
            throw new NotFoundException(`Paciente con id ${id} no encontrado`);
        }
        return paciente;
    }

    crear(dto: CrearPacienteDto) {
        return this.pacienteRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarPacienteDto) {
        await this.obtenerPorId(id);
        return this.pacienteRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.pacienteRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}