import { PartialType } from "@nestjs/mapped-types";
import { CrearMedicamentoDto } from "./create-medicamento.dto.js";

export class ActualizarMedicamentoDto extends PartialType(CrearMedicamentoDto) {}