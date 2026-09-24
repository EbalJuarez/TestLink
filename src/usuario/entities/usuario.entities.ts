import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {
    @PrimaryGeneratedColumn()
    usuario_id: number;

    @Column({ length: 50, unique: true })
    username: string;

    @Column({ length: 50 })
    password: string;

    @Column()
    rol_id: number;

    @Column({ name: 'odontologo_id', type: 'int', nullable: true })
    odontologo_id: number;

    @Column({ name: 'paciente_id', type: 'int', nullable: true})
    paciente_id: number;
}