import { Injectable, NotFoundException } from "@nestjs/common";
import { RecetaDetalleRepository } from "./receta_detalle.repository.js";
import { CrearRecetaDetalleDto } from "./dto/create-receta_detalle.dto.js";
import { ActualizarRecetaDetalleDto } from "./dto/update-receta_detalle.dto.js";

@Injectable()
export class RecetaDetalleService {
    constructor(private readonly recetaDetalleRepository: RecetaDetalleRepository) {}

    obtenerTodos() {
        return this.recetaDetalleRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const detalle = await this.recetaDetalleRepository.findById(id);
        if (!detalle) {
            throw new NotFoundException(`Detalle de receta con id ${id} no encontrado`);
        }
        return detalle;
    }

    crear(dto: CrearRecetaDetalleDto) {
        return this.recetaDetalleRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarRecetaDetalleDto) {
        await this.obtenerPorId(id);
        return this.recetaDetalleRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.recetaDetalleRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}