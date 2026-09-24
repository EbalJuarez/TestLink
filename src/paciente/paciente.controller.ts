import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { PacienteService } from "./paciente.service.js";
import { CrearPacienteDto } from "./dto/create-paciente.dto.js";
import { ActualizarPacienteDto } from "./dto/update-paciente.dto.js";

@Controller('pacientes')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @Get()
    obtenerTodos() {
        return this.pacienteService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.pacienteService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearPacienteDto) {
        return this.pacienteService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarPacienteDto) {
        return this.pacienteService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarPacienteDto) {
        return this.pacienteService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.pacienteService.eliminar(id);
    }
}