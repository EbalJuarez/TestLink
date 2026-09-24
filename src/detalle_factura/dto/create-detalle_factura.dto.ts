import { IsInt, IsPositive, IsOptional, IsNumber } from "class-validator";

export class CrearDetalleFacturaDto {
    @IsInt()
    @IsPositive()
    id_factura: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    id_tratamiento?: number;

    @IsInt()
    @IsPositive()
    cantidad: number;

    @IsNumber()
    @IsPositive()
    subtotal: number;
}