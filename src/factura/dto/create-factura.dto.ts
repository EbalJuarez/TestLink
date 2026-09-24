import { IsDateString, IsNumber, IsPositive, IsString, MaxLength, IsInt } from "class-validator";

export class CrearFacturaDto {
    @IsDateString()
    fecha: string; 

    @IsNumber()
    @IsPositive()
    total: number;

    @IsString()
    @MaxLength(10)
    estado: string; 

    @IsInt()
    @IsPositive()
    paciente_id: number;
}