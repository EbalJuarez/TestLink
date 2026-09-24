import { Injectable, NotFoundException } from "@nestjs/common";
import { TratamientoRepository } from "./tratamiento.repository.js";
import { CrearTratamientoDto } from "./dto/create-tratamiento.dto.js";
import { ActualizarTratamientoDto } from "./dto/update-tratamiento.dto.js";

@Injectable()
export class TratamientoService {
    constructor(private readonly tratamientoRepository: TratamientoRepository) {}

    obtenerTodos() {
        return this.tratamientoRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const tratamiento = await this.tratamientoRepository.findById(id);
        if (!tratamiento) {
            throw new NotFoundException(`Tratamiento con id ${id} no encontrado`);
        }
        return tratamiento;
    }

    crear(dto: CrearTratamientoDto) {
        return this.tratamientoRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarTratamientoDto) {
        await this.obtenerPorId(id);
        return this.tratamientoRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.tratamientoRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}