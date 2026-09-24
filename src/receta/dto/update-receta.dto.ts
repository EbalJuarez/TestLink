import { PartialType } from "@nestjs/mapped-types";
import { CrearRecetaDto } from "./create-receta.dto.js";

export class ActualizarRecetaDto extends PartialType(CrearRecetaDto) {}