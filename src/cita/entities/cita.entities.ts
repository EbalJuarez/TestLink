import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'cita' })
export class Cita {
    @PrimaryGeneratedColumn()
    cita_id: number;

    @Column({ type: 'timestamp' })
    fecha_hora: string; // 👈 antes era Date

    @Column({ length: 255, nullable: true })
    motivo: string;

    @Column()
    paciente_id: number;

    @Column()
    odontologo_id: number;
}