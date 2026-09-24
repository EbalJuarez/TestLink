import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RecetaDetalle } from "./entities/receta_detalle.entitites.js";

@Injectable()
export class RecetaDetalleRepository {
    constructor(
        @InjectRepository(RecetaDetalle)
        private readonly repo: Repository<RecetaDetalle>
    ) {}

    findAll(): Promise<RecetaDetalle[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<RecetaDetalle | null> {
        return this.repo.findOneBy({ receta_detalle_id: id });
    }

    create(data: Partial<RecetaDetalle>): Promise<RecetaDetalle> {
        const nuevoDetalle = this.repo.create(data);
        return this.repo.save(nuevoDetalle);
    }

    async update(id: number, data: Partial<RecetaDetalle>): Promise<RecetaDetalle | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ receta_detalle_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ receta_detalle_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}