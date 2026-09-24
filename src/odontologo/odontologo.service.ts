import { Injectable, NotFoundException } from "@nestjs/common";
import { OdontologoRepository } from "./odontologo.repository.js";
import { CrearOdontologoDto } from "./dto/create-odontologo.dto.js";
import { ActualizarOdontologoDto } from "./dto/update-odontologo.dto.js";

@Injectable()
export class OdontologoService {
    constructor(private readonly odontologoRepository: OdontologoRepository) {}

    obtenerTodos() {
        return this.odontologoRepository.findAll();
    }

    async obtenerPorId(id: number) {
        const odontologo = await this.odontologoRepository.findById(id);
        if (!odontologo) {
            throw new NotFoundException(`Odontólogo con id ${id} no encontrado`);
        }
        return odontologo;
    }

    crear(dto: CrearOdontologoDto) {
        return this.odontologoRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarOdontologoDto) {
        await this.obtenerPorId(id);
        return this.odontologoRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.odontologoRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }
}