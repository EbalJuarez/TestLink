import { IsString, MaxLength } from "class-validator";

export class CrearRolDto {
    @IsString()
    @MaxLength(30)
    nombre: string; // ej: "Administrador", "Odontologo", "Recepcionista", "Paciente"
}