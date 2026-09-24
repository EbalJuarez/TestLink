import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Odontologo } from "./entities/odontologo.entitites.js";

@Injectable()
export class OdontologoRepository {
    constructor(
        @InjectRepository(Odontologo)
        private readonly repo: Repository<Odontologo>
    ) {}

    findAll(): Promise<Odontologo[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Odontologo | null> {
        return this.repo.findOneBy({ odontologo_id: id });
    }

    create(data: Partial<Odontologo>): Promise<Odontologo> {
        const nuevoOdontologo = this.repo.create(data);
        return this.repo.save(nuevoOdontologo);
    }

    async update(id: number, data: Partial<Odontologo>): Promise<Odontologo | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ odontologo_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ odontologo_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}