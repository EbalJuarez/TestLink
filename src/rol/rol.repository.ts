import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Rol } from "./entities/rol.entities.js";

@Injectable()
export class RolRepository {
    constructor(
        @InjectRepository(Rol)
        private readonly repo: Repository<Rol>
    ) {}

    findAll(): Promise<Rol[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Rol | null> {
        return this.repo.findOneBy({ rol_id: id });
    }

    create(data: Partial<Rol>): Promise<Rol> {
        const nuevoRol = this.repo.create(data);
        return this.repo.save(nuevoRol);
    }

    async update(id: number, data: Partial<Rol>): Promise<Rol | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ rol_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ rol_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}