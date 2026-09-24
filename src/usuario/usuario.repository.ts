import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "./entities/usuario.entities.js";

@Injectable()
export class UsuarioRepository {
    constructor(
        @InjectRepository(Usuario)
        private readonly repo: Repository<Usuario>
    ) {}

    findAll(): Promise<Usuario[]> {
        return this.repo.find();
    }

    findById(id: number): Promise<Usuario | null> {
        return this.repo.findOneBy({ usuario_id: id });
    }

    findByUsername(username: string): Promise<Usuario | null> {
        return this.repo.findOneBy({ username });
    }

    create(data: Partial<Usuario>): Promise<Usuario> {
        const nuevoUsuario = this.repo.create(data);
        return this.repo.save(nuevoUsuario);
    }

    async update(id: number, data: Partial<Usuario>): Promise<Usuario | null> {
        const actualizar = await this.findById(id);
        if (actualizar) {
            await this.repo.update({ usuario_id: id }, data);
        }
        return this.findById(id);
    }

    async delete(id: number): Promise<boolean> {
        const resultado = await this.repo.delete({ usuario_id: id });
        return (resultado.affected ?? 0) > 0;
    }
}