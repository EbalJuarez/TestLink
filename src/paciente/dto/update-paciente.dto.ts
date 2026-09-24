import { PartialType } from "@nestjs/mapped-types";
import { CrearPacienteDto } from "./create-paciente.dto.js";

export class ActualizarPacienteDto extends PartialType(CrearPacienteDto) {}