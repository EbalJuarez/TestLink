import { IsString, MaxLength } from "class-validator";

export class CrearOdontologoDto {
    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsString()
    @MaxLength(8)
    telefono: string;

    @IsString()
    @MaxLength(255)
    especialidad: string;
}