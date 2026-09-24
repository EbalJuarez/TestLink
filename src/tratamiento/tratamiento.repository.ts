import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tratamiento } from "./entitites/tratamiento.entities.js";

@Injectable()
export class TratamientoRepository {
    constructor(
        @InjectRepository(Tratamiento)
        private readonly repo: Repository<Tratamiento>
    ) {}

    findAll(): Promise<Tratamiento[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Tratamiento | null> {
        return this.repo.findOneBy({ id_tratamiento: id });
    }

    create(data: Partial<Tratamiento>): Promise<Tratamiento> {
        const nuevoTratamiento = this.repo.create(data);
        return this.repo.save(nuevoTratamiento);
    }

    async update(id: number, data: Partial<Tratamiento>): Promise<Tratamiento | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ id_tratamiento: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ id_tratamiento: id });
        return (resultado.affected ?? 0) > 0;
    }
}