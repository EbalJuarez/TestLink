import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'paciente' })
export class Paciente {
    @PrimaryGeneratedColumn()
    paciente_id: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ type: 'date' })
    fecha_nacimiento: string;
}