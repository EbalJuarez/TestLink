import { PartialType } from "@nestjs/mapped-types";
import { CrearOdontologoDto } from "./create-odontologo.dto.js";

export class ActualizarOdontologoDto extends PartialType(CrearOdontologoDto) {}