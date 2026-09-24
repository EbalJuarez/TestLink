import { PartialType } from "@nestjs/mapped-types";
import { CrearUsuarioDto } from "./create-usuario.dto.js";

export class ActualizarUsuarioDto extends PartialType(CrearUsuarioDto) {}