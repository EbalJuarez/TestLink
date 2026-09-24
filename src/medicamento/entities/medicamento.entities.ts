import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'medicamento' })
export class Medicamento {
    @PrimaryGeneratedColumn()
    id_medicamento: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 255 })
    descripcion: string;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    precio: number;
}