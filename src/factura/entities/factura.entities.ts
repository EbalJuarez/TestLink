import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'factura' })
export class Factura {
    @PrimaryGeneratedColumn()
    id_factura: number;

    @Column({ type: 'date' })
    fecha: string;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    total: number;

    @Column({ length: 10 })
    estado: string;

    @Column()
    paciente_id: number;
}