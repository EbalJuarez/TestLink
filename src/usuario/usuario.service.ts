import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository.js";
import { CrearUsuarioDto } from "./dto/create-usuario.dto.js";
import { ActualizarUsuarioDto } from "./dto/update-usuario.dto.js";
import { LoginUsuarioDto } from "./dto/login-usuario.dto.js";

@Injectable()
export class UsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    async obtenerTodos() {
        const usuarios = await this.usuarioRepository.findAll();
        return usuarios.map(({ password, ...resto }) => resto);
    }

    async obtenerPorId(id: number) {
        const usuario = await this.usuarioRepository.findById(id);
        if (!usuario) {
            throw new NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        const { password, ...resto } = usuario;
        return resto;
    }

    crear(dto: CrearUsuarioDto) {
        return this.usuarioRepository.create(dto);
    }

    async actualizar(id: number, dto: ActualizarUsuarioDto) {
        await this.obtenerPorId(id);
        return this.usuarioRepository.update(id, dto);
    }

    async eliminar(id: number) {
        await this.obtenerPorId(id);
        await this.usuarioRepository.delete(id);
        return { mensaje: 'Eliminado' };
    }

    async login(dto: LoginUsuarioDto) {
        const usuario = await this.usuarioRepository.findByUsername(dto.username);

        if (!usuario) {
            throw new UnauthorizedException('Usuario o contraseña incorrectos');
        }

        if (usuario.password !== dto.password) {
            throw new UnauthorizedException('Usuario o contraseña incorrectos');
        }

        const { password, ...usuarioSinPassword } = usuario;
        return {
            mensaje: 'Login exitoso',
            usuario: usuarioSinPassword,
        };
    }
}