import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'odontologo' })
export class Odontologo {
    @PrimaryGeneratedColumn()
    odontologo_id: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 8 })
    telefono: string;

    @Column({ length: 255 })
    especialidad: string;
}