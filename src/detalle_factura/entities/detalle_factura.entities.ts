import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Tratamiento } from "../../tratamiento/entitites/tratamiento.entities.js";

@Entity({ name: 'detalle_factura' })
export class DetalleFactura {
    @PrimaryGeneratedColumn()
    detalle_id: number;

    @Column({ type: 'int' })
    id_tratamiento: number;

    @Column()
    cantidad: number;

    @Column({ type: 'decimal', precision: 8, scale: 2 })
    subtotal: number;
}