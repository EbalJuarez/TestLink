import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { RecetaService } from "./receta.service.js";
import { CrearRecetaDto } from "./dto/create-receta.dto.js";
import { ActualizarRecetaDto } from "./dto/update-receta.dto.js";

@Controller('recetas')
export class RecetaController {
    constructor(private readonly recetaService: RecetaService) {}

    @Get()
    obtenerTodos() {
        return this.recetaService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.recetaService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearRecetaDto) {
        return this.recetaService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRecetaDto) {
        return this.recetaService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRecetaDto) {
        return this.recetaService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.recetaService.eliminar(id);
    }
}