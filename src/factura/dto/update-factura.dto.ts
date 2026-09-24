import { PartialType } from "@nestjs/mapped-types";
import { CrearFacturaDto } from "./create-factura.dto.js";

export class ActualizarFacturaDto extends PartialType(CrearFacturaDto) {}