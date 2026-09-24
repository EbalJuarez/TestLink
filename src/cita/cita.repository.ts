import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cita } from "./entities/cita.entities.js";

@Injectable()
export class CitaRepository {
    constructor(
        @InjectRepository(Cita)
        private readonly repo: Repository<Cita>
    ) {}

    findAll(): Promise<Cita[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Cita | null> {
        return this.repo.findOneBy({ cita_id: id });
    }

    create(data: Partial<Cita>): Promise<Cita> {
        const nuevaCita = this.repo.create(data);
        return this.repo.save(nuevaCita);
    }

    async update(id: number, data: Partial<Cita>): Promise<Cita | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ cita_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ cita_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}