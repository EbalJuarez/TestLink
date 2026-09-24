import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'tratamiento' })
export class Tratamiento {
    @PrimaryGeneratedColumn()
    id_tratamiento: number;

    @Column({ length: 255 })
    descripcion: string;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    precio: number;
}