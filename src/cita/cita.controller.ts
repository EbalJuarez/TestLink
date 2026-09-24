import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { CitaService } from "./cita.service.js";
import { CrearCitaDto } from "./dto/create-cita.dto.js";
import { ActualizarCitaDto } from "./dto/update-cita.dto.js";

@Controller('citas')
export class CitaController {
    constructor(private readonly citaService: CitaService) {}

    @Get()
    obtenerTodos() {
        return this.citaService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.citaService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearCitaDto) {
        return this.citaService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarCitaDto) {
        return this.citaService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarCitaDto) {
        return this.citaService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.citaService.eliminar(id);
    }
}