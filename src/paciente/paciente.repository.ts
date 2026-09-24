import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Paciente } from "./entities/paciente.entities.js";

@Injectable()
export class PacienteRepository {
    constructor(
        @InjectRepository(Paciente)
        private readonly repo: Repository<Paciente>
    ) {}

    findAll(): Promise<Paciente[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Paciente | null> {
        return this.repo.findOneBy({ paciente_id: id });
    }

    create(data: Partial<Paciente>): Promise<Paciente> {
        const nuevoPaciente = this.repo.create(data);
        return this.repo.save(nuevoPaciente);
    }

    async update(id: number, data: Partial<Paciente>): Promise<Paciente | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ paciente_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ paciente_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}