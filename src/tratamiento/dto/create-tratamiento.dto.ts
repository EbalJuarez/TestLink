import { IsString, MaxLength, IsNumber, IsPositive } from "class-validator";

export class CrearTratamientoDto {
    @IsString()
    @MaxLength(255)
    descripcion: string;

    @IsNumber()
    @IsPositive()
    precio: number;
}