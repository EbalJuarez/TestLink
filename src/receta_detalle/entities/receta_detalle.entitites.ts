import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'receta_detalle' })
export class RecetaDetalle {
    @PrimaryGeneratedColumn()
    receta_detalle_id: number;

    @Column()
    receta_id: number;

    @Column()
    id_medicamento: number;

    @Column({ length: 255 })
    dosis_instrucciones: string;
}