import { IsString, MaxLength, MinLength, IsInt, IsPositive, IsOptional } from "class-validator";

export class CrearUsuarioDto {
    @IsString()
    @MaxLength(50)
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    password: string;

    @IsInt()
    @IsPositive()
    rol_id: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    odontologo_id?: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    paciente_id?: number;
}