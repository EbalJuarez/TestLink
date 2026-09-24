import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { RolService } from "./rol.service.js";
import { CrearRolDto } from "./dto/create-rol.dto.js";
import { ActualizarRolDto } from "./dto/update-rol.dto.js";

@Controller('roles')
export class RolController {
    constructor(private readonly rolService: RolService) {}

    @Get()
    obtenerTodos() {
        return this.rolService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.rolService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearRolDto) {
        return this.rolService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRolDto) {
        return this.rolService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRolDto) {
        return this.rolService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.rolService.eliminar(id);
    }
}