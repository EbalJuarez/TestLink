import { Injectable, NotFoundException } from "@nestjs/common";
import { RolRepository } from "./rol.repository.js";
import { CrearRolDto } from "./dto/create-rol.dto.js";
import { ActualizarRolDto } from "./dto/update-rol.dto.js";

@Injectable()
export class RolService {
    constructor(private readonly rolRepository: RolRepository) {}

    obtenerTodos() {
        return this.rolRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const rol = await this.rolRepository.findById(id);
        if (!rol) {
            throw new NotFoundException(`Rol con id ${id} no encontrado`);
        }
        return rol;
    }

    crear(dto: CrearRolDto) {
        return this.rolRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarRolDto) {
        await this.obtenerPorId(id);
        return this.rolRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.rolRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}