import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseIntPipe } from "@nestjs/common";
import { MedicamentoService } from "./medicamento.service.js";
import { CrearMedicamentoDto } from "./dto/create-medicamento.dto.js";
import { ActualizarMedicamentoDto } from "./dto/update-medicamento.dto.js";

@Controller('medicamentos')
export class MedicamentoController {
    constructor(private readonly medicamentoService: MedicamentoService) {}

    @Get()
    obtenerTodos() {
        return this.medicamentoService.obtenerTodos();
    }

    @Get(':id')
    obtenerPorId(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentoService.obtenerPorId(id);
    }

    @Post()
    crear(@Body() dto: CrearMedicamentoDto) {
        return this.medicamentoService.crear(dto);
    }

    @Put(':id')
    actualizarPut(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarMedicamentoDto) {
        return this.medicamentoService.actualizar(id, dto);
    }

    @Patch(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: ActualizarMedicamentoDto) {
        return this.medicamentoService.actualizar(id, dto);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentoService.eliminar(id);
    }
}