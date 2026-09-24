import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { TratamientoService } from "./tratamiento.service.js";
import { CrearTratamientoDto } from "./dto/create-tratamiento.dto.js";
import { ActualizarTratamientoDto } from "./dto/update-tratamiento.dto.js";

@Controller('tratamientos')
export class TratamientoController {
    constructor(private readonly tratamientoService: TratamientoService) {}

    @Get()
    obtenerTodos() {
        return this.tratamientoService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.tratamientoService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearTratamientoDto) {
        return this.tratamientoService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarTratamientoDto) {
        return this.tratamientoService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarTratamientoDto) {
        return this.tratamientoService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.tratamientoService.eliminar(id);
    }
}