import { IsDateString, IsOptional, IsString, MaxLength, IsInt, IsPositive } from "class-validator";

export class CrearCitaDto {
    @IsDateString()
    fecha_hora: string; // ej: "2026-09-25T14:30:00"

    @IsOptional()
    @IsString()
    @MaxLength(255)
    motivo?: string;

    @IsInt()
    @IsPositive()
    paciente_id: number;

    @IsInt()
    @IsPositive()
    odontologo_id: number;
}