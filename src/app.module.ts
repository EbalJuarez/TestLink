import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/typeorm.config.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { PacienteModule } from './paciente/paciente.module.js';
import { CitaModule } from './cita/cita.module.js';
import { DetalleFacturaModule } from './detalle_factura/detalle_factura.module.js';
import { FacturaModule } from './factura/factura.module.js';
import { MedicamentoModule } from './medicamento/medicamento.module.js';
import { OdontologoModule } from './odontologo/odontologo.module.js';
import { RecetaModule } from './receta/receta.module.js';
import { RecetaDetalleModule } from './receta_detalle/receta_detalle.module.js';
import { RolModule } from './rol/rol.module.js';
import { TratamientoModule } from './tratamiento/tratamiento.module.js';
import { UsuarioModule } from './usuario/usuario.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig(),
      }),
    }),
    PacienteModule,
    CitaModule,
    DetalleFacturaModule,
    FacturaModule,
    MedicamentoModule,
    OdontologoModule,
    RecetaModule,
    RecetaDetalleModule,
    RolModule,
    TratamientoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}