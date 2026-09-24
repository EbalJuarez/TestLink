import { PartialType } from "@nestjs/mapped-types";
import { CrearCitaDto } from "./create-cita.dto.js";

export class ActualizarCitaDto extends PartialType(CrearCitaDto) {}