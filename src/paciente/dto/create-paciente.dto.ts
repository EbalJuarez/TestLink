import { IsString, MaxLength, IsDateString } from "class-validator";

export class CrearPacienteDto {
    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsDateString()
    fecha_nacimiento: string; // "YYYY-MM-DD"
}