import { IsDateString, IsInt, IsPositive } from "class-validator";

export class CrearRecetaDto {
    @IsDateString()
    fecha: string; // "YYYY-MM-DD"

    @IsInt()
    @IsPositive()
    paciente_id: number;

    @IsInt()
    @IsPositive()
    odontologo_id: number;
}