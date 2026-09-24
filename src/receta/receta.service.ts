import { Injectable, NotFoundException } from "@nestjs/common";
import { RecetaRepository } from "./receta.repository.js";
import { CrearRecetaDto } from "./dto/create-receta.dto.js";
import { ActualizarRecetaDto } from "./dto/update-receta.dto.js";

@Injectable()
export class RecetaService {
    constructor(private readonly recetaRepository: RecetaRepository) {}

    obtenerTodos() {
        return this.recetaRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const receta = await this.recetaRepository.findById(id);
        if (!receta) {
            throw new NotFoundException(`Receta con id ${id} no encontrada`);
        }
        return receta;
    }

    crear(dto: CrearRecetaDto) {
        return this.recetaRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarRecetaDto) {
        await this.obtenerPorId(id);
        return this.recetaRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.recetaRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}