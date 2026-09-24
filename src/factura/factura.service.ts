import { Injectable, NotFoundException } from "@nestjs/common";
import { FacturaRepository } from "./factura.repository.js";
import { CrearFacturaDto } from "./dto/create-factura.dto.js";
import { ActualizarFacturaDto } from "./dto/update-factura.dto.js";

@Injectable()
export class FacturaService {
    constructor(private readonly facturaRepository: FacturaRepository) {}

    obtenerTodos() {
        return this.facturaRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const factura = await this.facturaRepository.findById(id);
        if (!factura) {
            throw new NotFoundException(`Factura con id ${id} no encontrada`);
        }
        return factura;
    }

    crear(dto: CrearFacturaDto) {
        return this.facturaRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarFacturaDto) {
        await this.obtenerPorId(id);
        return this.facturaRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.facturaRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}