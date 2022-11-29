
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horarios')
export class HorariosEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({ name: 'horario_apertura' })
    horario_apertura: Date

    @Column({ name: 'horario_cierre' })
    horario_cierre: Date

    @Column('float', {
        name: 'precio_base',
        default: 0.0,
        nullable: false,
    })
    precioBase: number;

    @Column()
    dias_atencion: []
}

/*

CREATE TABLE `horario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `horario_apertura` time NOT NULL,
  `horario_cierre` time NOT NULL,
  `precio_base` int unsigned DEFAULT NULL,
  `dias_atencion` set('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado') DEFAULT NULL,
  `estacionamiento_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `estacionamiento_id_UNIQUE` (`estacionamiento_id`),
  CONSTRAINT `estacionamiento_id` FOREIGN KEY (`estacionamiento_id`) REFERENCES `estacionamiento` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

*/