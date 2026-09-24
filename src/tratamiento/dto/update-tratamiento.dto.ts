import { PartialType } from "@nestjs/mapped-types";
import { CrearTratamientoDto } from "./create-tratamiento.dto.js";

export class ActualizarTratamientoDto extends PartialType(CrearTratamientoDto) {}