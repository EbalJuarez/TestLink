import { Injectable, NotFoundException } from "@nestjs/common";
import { DetalleFacturaRepository } from "./detalle_factura.repository.js";
import { CrearDetalleFacturaDto } from "./dto/create-detalle_factura.dto.js";
import { ActualizarDetalleFacturaDto } from "./dto/update-detalle_factura.dto.js";

@Injectable()
export class DetalleFacturaService {
    constructor(private readonly detalleFacturaRepository: DetalleFacturaRepository) {}

    obtenerTodos() {
        return this.detalleFacturaRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const detalle = await this.detalleFacturaRepository.findById(id);
        if (!detalle) {
            throw new NotFoundException(`Detalle de factura con id ${id} no encontrado`);
        }
        return detalle;
    }

    crear(dto: CrearDetalleFacturaDto) {
        return this.detalleFacturaRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarDetalleFacturaDto) {
        await this.obtenerPorId(id);
        return this.detalleFacturaRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.detalleFacturaRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}