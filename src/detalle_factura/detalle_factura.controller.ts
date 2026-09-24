import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { DetalleFacturaService } from "./detalle_factura.service.js";
import { CrearDetalleFacturaDto } from "./dto/create-detalle_factura.dto.js";
import { ActualizarDetalleFacturaDto } from "./dto/update-detalle_factura.dto.js";

@Controller('detalles-factura')
export class DetalleFacturaController {
    constructor(private readonly detalleFacturaService: DetalleFacturaService) {}

    @Get()
    obtenerTodos() {
        return this.detalleFacturaService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.detalleFacturaService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearDetalleFacturaDto) {
        return this.detalleFacturaService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarDetalleFacturaDto) {
        return this.detalleFacturaService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarDetalleFacturaDto) {
        return this.detalleFacturaService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.detalleFacturaService.eliminar(id);
    }
}