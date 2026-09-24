import { PartialType } from "@nestjs/mapped-types";
import { CrearRecetaDetalleDto } from "./create-receta_detalle.dto.js";

export class ActualizarRecetaDetalleDto extends PartialType(CrearRecetaDetalleDto) {}