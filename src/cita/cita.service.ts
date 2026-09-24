import { Injectable, NotFoundException } from "@nestjs/common";
import { CitaRepository } from "./cita.repository.js";
import { CrearCitaDto } from "./dto/create-cita.dto.js";
import { ActualizarCitaDto } from "./dto/update-cita.dto.js";

@Injectable()
export class CitaService {
    constructor(private readonly citaRepository: CitaRepository) {}

    obtenerTodos() {
        return this.citaRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const cita = await this.citaRepository.findById(id);
        if (!cita) {
            throw new NotFoundException(`Cita con id ${id} no encontrada`);
        }
        return cita;
    }

    crear(dto: CrearCitaDto) {
        return this.citaRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarCitaDto) {
        await this.obtenerPorId(id); // valida que exista, si no lanza 404
        return this.citaRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.citaRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}