import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { UsuarioService } from "./usuario.service.js";
import { CrearUsuarioDto } from "./dto/create-usuario.dto.js";
import { ActualizarUsuarioDto } from "./dto/update-usuario.dto.js";
import { LoginUsuarioDto } from "./dto/login-usuario.dto.js";

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    obtenerTodos() {
        return this.usuarioService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearUsuarioDto) {
        return this.usuarioService.crear(dto);
    }

    @Post('login')
    login(@Body() dto: LoginUsuarioDto) {
        return this.usuarioService.login(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarUsuarioDto) {
        return this.usuarioService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarUsuarioDto) {
        return this.usuarioService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.usuarioService.eliminar(id);
    }
}