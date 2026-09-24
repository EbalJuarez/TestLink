import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DetalleFactura } from "./entities/detalle_factura.entities.js";

@Injectable()
export class DetalleFacturaRepository {
    constructor(
        @InjectRepository(DetalleFactura)
        private readonly repo: Repository<DetalleFactura>
    ) {}

    findAll(): Promise<DetalleFactura[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<DetalleFactura | null> {
        return this.repo.findOneBy({ detalle_id: id });
    }

    create(data: Partial<DetalleFactura>): Promise<DetalleFactura> {
        const nuevoDetalle = this.repo.create(data);
        return this.repo.save(nuevoDetalle);
    }

    async update(id: number, data: Partial<DetalleFactura>): Promise<DetalleFactura | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ detalle_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ detalle_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}