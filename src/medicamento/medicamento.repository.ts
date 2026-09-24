import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Medicamento } from "./entities/medicamento.entities.js";

@Injectable()
export class MedicamentoRepository {
    constructor(
        @InjectRepository(Medicamento)
        private readonly repo: Repository<Medicamento>
    ) {}

    findAll(): Promise<Medicamento[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Medicamento | null> {
        return this.repo.findOneBy({ id_medicamento: id });
    }

    create(data: Partial<Medicamento>): Promise<Medicamento> {
        const nuevoMedicamento = this.repo.create(data);
        return this.repo.save(nuevoMedicamento);
    }

    async update(id: number, data: Partial<Medicamento>): Promise<Medicamento | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ id_medicamento: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ id_medicamento: id });
        return (resultado.affected ?? 0) > 0;
    }
}