import { PartialType } from "@nestjs/mapped-types";
import { CrearDetalleFacturaDto } from "./create-detalle_factura.dto.js";

export class ActualizarDetalleFacturaDto extends PartialType(CrearDetalleFacturaDto) {}