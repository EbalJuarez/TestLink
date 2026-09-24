import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Receta } from "./entities/receta.entities.js";

@Injectable()
export class RecetaRepository {
    constructor(
        @InjectRepository(Receta)
        private readonly repo: Repository<Receta>
    ) {}

    findAll(): Promise<Receta[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Receta | null> {
        return this.repo.findOneBy({ receta_id: id });
    }

    create(data: Partial<Receta>): Promise<Receta> {
        const nuevaReceta = this.repo.create(data);
        return this.repo.save(nuevaReceta);
    }

    async update(id: number, data: Partial<Receta>): Promise<Receta | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ receta_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ receta_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}