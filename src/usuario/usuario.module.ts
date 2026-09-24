import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entities.js";
import { UsuarioService } from "./usuario.service.js";
import { UsuarioController } from "./usuario.controller.js";
import { UsuarioRepository } from "./usuario.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository],
})
export class UsuarioModule {}