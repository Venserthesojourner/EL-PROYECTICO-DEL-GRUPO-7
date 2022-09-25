import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Model:* 
 CREATE TABLE `usuario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `role` enum('client','owner','employee','admin') NOT NULL DEFAULT 'client',
  `dni` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='En esta tabla se almacena los datos de los usuarios, '
 */

export enum role {
  CLIENT = 'client',
  OWNER = 'owner',
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'username', type: 'varchar', length: 15, nullable: false })
  username: string;

  @Column({ name: 'password', type: 'varchar', length: 15, nullable: false })
  password: string;

  @Column({ name: 'first_name', type: 'varchar', length: 45, nullable: false })
  firstName: string;

  @Column("varchar", { name: 'last_name', length: 45, nullable: false })
  lastName: string;

  @Column({
    name: 'token',
    type: 'varchar',
    length: 45,
    nullable: true,
    default: null,
  })
  token: string;

  @Column({ name: 'id_card_number', type: 'int', nullable: false })
  dni: number;

  @Column({ type: 'enum', enum: role, enumName: 'role', default: role.CLIENT })
  role: string;

  @CreateDateColumn('create_time')
  createddAt: Date;
  @UpdateDateColumn('update_time')
  updatedAt: Date;
  @DeleteDateColumn('delete_time')
  deletedAt: Date;
}
