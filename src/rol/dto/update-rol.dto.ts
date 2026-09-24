import { PartialType } from "@nestjs/mapped-types";
import { CrearRolDto } from "./create-rol.dto.js";

export class ActualizarRolDto extends PartialType(CrearRolDto) {}