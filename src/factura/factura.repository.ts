import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Factura } from "./entities/factura.entities.js";

@Injectable()
export class FacturaRepository {
    constructor(
        @InjectRepository(Factura)
        private readonly repo: Repository<Factura>
    ) {}

    findAll(): Promise<Factura[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Factura | null> {
        return this.repo.findOneBy({ id_factura: id });
    }

    create(data: Partial<Factura>): Promise<Factura> {
        const nuevaFactura = this.repo.create(data);
        return this.repo.save(nuevaFactura);
    }

    async update(id: number, data: Partial<Factura>): Promise<Factura | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ id_factura: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ id_factura: id });
        return (resultado.affected ?? 0) > 0;
    }
}