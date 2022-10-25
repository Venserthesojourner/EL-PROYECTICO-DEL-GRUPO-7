import { Estacionamiento } from "src/modules/estacionamiento/entitites/estacionamiento.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

/* CREATE TABLE `plaza` (
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT NULL,
    `delete_time` timestamp NULL DEFAULT NULL,
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `estacionamiento_id` int NOT NULL,
    `nombre_clave` varchar(45) NOT NULL,
    `ocupado` tinyint DEFAULT '0',
    `plazacol` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; */


@Entity('plaza')
export class Plaza {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Estacionamiento, estacionamiento => estacionamiento.id)
    @JoinColumn({ name: 'estacionamiento_id' })
    estacionamiento: Estacionamiento

    @Column('varchar', {
        name: 'nombre_clave',
        length: 45,
        nullable: false
    })
    nombrePlaza: string

    @Column('tinyint', {
        name: 'ocupado',
        default: 0,
        nullable: false
    })
    vacante: boolean

    @Column('varchar', {
        name: 'plazacol',
        nullable: false,
        length: 45
    })
    plazaColumna: string
}