import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { OdontologoService } from "./odontologo.service.js";
import { CrearOdontologoDto } from "./dto/create-odontologo.dto.js";
import { ActualizarOdontologoDto } from "./dto/update-odontologo.dto.js";

@Controller('odontologos')
export class OdontologoController {
    constructor(private readonly odontologoService: OdontologoService) {}

    @Get()
    obtenerTodos() {
        return this.odontologoService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.odontologoService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearOdontologoDto) {
        return this.odontologoService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarOdontologoDto) {
        return this.odontologoService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarOdontologoDto) {
        return this.odontologoService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.odontologoService.eliminar(id);
    }
}