import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'receta' })
export class Receta {
    @PrimaryGeneratedColumn()
    receta_id: number;

    @Column({ type: 'date' })
    fecha: string;

    @Column()
    paciente_id: number;

    @Column()
    odontologo_id: number;
}