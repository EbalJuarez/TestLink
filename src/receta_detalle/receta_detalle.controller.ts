import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { RecetaDetalleService } from "./receta_detalle.service.js";
import { CrearRecetaDetalleDto } from "./dto/create-receta_detalle.dto.js";
import { ActualizarRecetaDetalleDto } from "./dto/update-receta_detalle.dto.js";

@Controller('recetas-detalle')
export class RecetaDetalleController {
    constructor(private readonly recetaDetalleService: RecetaDetalleService) {}

    @Get()
    obtenerTodos() {
        return this.recetaDetalleService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearRecetaDetalleDto) {
        return this.recetaDetalleService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRecetaDetalleDto) {
        return this.recetaDetalleService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarRecetaDetalleDto) {
        return this.recetaDetalleService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.recetaDetalleService.eliminar(id);
    }
}