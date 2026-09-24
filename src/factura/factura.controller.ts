import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { FacturaService } from "./factura.service.js";
import { CrearFacturaDto } from "./dto/create-factura.dto.js";
import { ActualizarFacturaDto } from "./dto/update-factura.dto.js";

@Controller('facturas')
export class FacturaController {
    constructor(private readonly facturaService: FacturaService) {}

    @Get()
    obtenerTodos() {
        return this.facturaService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.facturaService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearFacturaDto) {
        return this.facturaService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarFacturaDto) {
        return this.facturaService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarFacturaDto) {
        return this.facturaService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.facturaService.eliminar(id);
    }
}