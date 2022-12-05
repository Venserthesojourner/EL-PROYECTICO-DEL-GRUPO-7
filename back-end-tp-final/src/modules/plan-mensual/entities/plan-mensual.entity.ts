/*
CREATE TABLE `plan_mensual` (
  `estacionamiento_id` int NOT NULL,
  `duracion` int DEFAULT NULL,
  `precio_base` int DEFAULT NULL,
  `modificador` varchar(45) DEFAULT NULL,
  `codigo_plan_especial` varchar(45) NOT NULL,
  PRIMARY KEY (`codigo_plan_especial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 */
import { Estacionamiento } from "../../estacionamiento/entitites/estacionamiento.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Vehiculo } from "../../vehiculo/entities/vehiculo.entity";

@Entity('plan_mensual')
export class PlanMensual {
    @PrimaryColumn('varchar', {
        name: 'codigo_plan_especial',
        length: 45,
        nullable: false
    })
    codigo: string

    @Column('int', {
        name: 'duracion'
    })
    duracion: number

    estado: string

    precioBase: number

    modificador: number

    @ManyToOne(() => Estacionamiento, estacionamiento => estacionamiento.id)
    estacionamiento: Estacionamiento

    @ManyToMany(() => Vehiculo, vehiculo => vehiculo.id)
    vehiculo: Vehiculo[]
}