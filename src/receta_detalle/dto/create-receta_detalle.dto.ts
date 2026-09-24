import { IsInt, IsPositive, IsString, MaxLength } from "class-validator";

export class CrearRecetaDetalleDto {
    @IsInt()
    @IsPositive()
    receta_id: number;

    @IsInt()
    @IsPositive()
    id_medicamento: number;

    @IsString()
    @MaxLength(255)
    dosis_instrucciones: string;
}