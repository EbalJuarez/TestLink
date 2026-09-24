import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rol } from "./entities/rol.entities.js";
import { RolService } from "./rol.service.js";
import { RolController } from "./rol.controller.js";
import { RolRepository } from "./rol.repository.js";

@Module({
    imports: [TypeOrmModule.forFeature([Rol])],
    controllers: [RolController],
    providers: [RolService, RolRepository],
})
export class RolModule {}