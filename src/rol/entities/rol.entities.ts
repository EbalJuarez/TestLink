import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'rol' })
export class Rol {
    @PrimaryGeneratedColumn()
    rol_id: number;

    @Column({ length: 30 })
    nombre: string;
}