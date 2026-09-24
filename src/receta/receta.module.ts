import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Receta } from "./entities/receta.entities.js";
import { RecetaService } from "./receta.service.js";
import { RecetaController } from "./receta.controller.js";
import { RecetaRepository } from "./receta.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Receta])],
    controllers: [RecetaController],
    providers: [RecetaService, RecetaRepository],
})
export class RecetaModule {}