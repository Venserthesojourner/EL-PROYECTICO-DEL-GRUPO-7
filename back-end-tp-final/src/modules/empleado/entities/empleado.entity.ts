/*
CREATE TABLE `operador` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `usuario_id` int NOT NULL,
  `legajo_empleado` varchar(10) NOT NULL,
  `estacionamiento_id` int NOT NULL,
  `horario_entrada` time DEFAULT NULL,
  `horario_salida` time DEFAULT NULL,
  PRIMARY KEY (`legajo_empleado`),
  KEY `usuario_id_idx` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 */


import { Estacionamiento } from '../../estacionamiento/entitites/estacionamiento.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

/*
CREATE TABLE `estacionamiento` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(45) DEFAULT NULL,
  `capacidad_maxima` int unsigned NOT NULL,
  `horario_apertura` time NOT NULL,
  `horario_cierre` time NOT NULL,
  `percio_base` int unsigned DEFAULT NULL,
  `dias_atencion` set('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado') DEFAULT NULL,
  `propietario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `propietario_id_UNIQUE` (`propietario_id`),
  CONSTRAINT `propietario_id` FOREIGN KEY (`propietario_id`) REFERENCES `propietario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/

@Entity({ name: 'operador' })
export class Empleado extends BaseEntity {
  @OneToOne(() => Usuario, (usuario) => usuario.id)
  usuario: Usuario;

  @PrimaryColumn('varchar', { name: 'legajo_empleado', length: 10, nullable: false })
  legajoEmpleado: string;

  @ManyToOne(() => Estacionamiento, (estacionamiento) => estacionamiento.id)
  @JoinColumn({ name: 'estacionamiento_id' })
  estacionamiento: Estacionamiento;

  @Column('time', { name: 'horario_entrada' })
  horarioEntrada: string;

  @Column('time', { name: 'horario_salida' })
  horarioSalida: string;

  @CreateDateColumn({ name: 'create_time', nullable: false })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'update_time',
    nullable: false,
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'delete_time', nullable: false, default: null })
  deletedAt: Date;
}
