import { Usuario } from "./../../usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

/*
CREATE TABLE `propietario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  'id' int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `cuil` int DEFAULT NULL,
  `cuit` int DEFAULT NULL,
  `ingresos_brutos` int DEFAULT NULL,
  `cbu` varchar(45) DEFAULT NULL,
  PRIMARY KEY ('id'),
  KEY `index1` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) 
  ON DELETE cascade ON UPDATE cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;*/

@Entity({ name: 'propietario' })
export class Propietario extends Usuario {
  @PrimaryColumn()
  @OneToOne(() => Usuario, (Usuario) => Usuario.id)
  @JoinColumn({ name: 'id_usuario' })
  idUsuario: Usuario;

  @Column('int', { name: 'cuil', nullable: true, default: null })
  cuil: number | null;

  @Column('int', { name: 'cuit', nullable: true, default: null })
  cuit: number | null;

  @Column('int', { name: 'ingresos_brutos', nullable: true, default: null })
  ingresosBrutos: number | null;

  @Column('varchar', { name: 'cbu', length: 45, nullable: true, default: null })
  cbu: string | null;
}