import { IsString, MaxLength, IsNumber, IsPositive } from "class-validator";

export class CrearMedicamentoDto {
    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsString()
    @MaxLength(255)
    descripcion: string;

    @IsNumber()
    @IsPositive()
    precio: number;
}