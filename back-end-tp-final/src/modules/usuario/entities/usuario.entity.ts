import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Model:* 
 CREATE TABLE `usuario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,  
  `password` varchar(15) NOT NULL,   
  `email` varchar(45) NOT NULL,
  `token` varchar(45) DEFAULT NULL, 
  `role` enum('client','owner','employee','admin') NOT NULL DEFAULT 'admin',  
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='En esta tabla se almacena los datos de los usuarios'

`username` varchar(15) NOT NULL,
`first_name` varchar(45) DEFAULT NULL,
`last_name` varchar(45) DEFAULT NULL,
`dni` int DEFAULT NULL,
 */

export enum role {
  CLIENT = 'client',
  OWNER = 'owner',
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

@Entity({ name: 'usuario' })
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { name: 'password', length: 250, nullable: false })
  password: string;

  @Column('varchar', { name: 'first_name', length: 45, nullable: false, default: '' })
  firstName: string;

  @Column("varchar", { name: 'last_name', length: 45, nullable: false, default: '' })
  lastName: string;

  @Column('varchar', {
    name: 'token',
    length: 45,
    nullable: true,
    default: null,
  })
  token: string;

  @Column('int', { name: 'dni', nullable: false })
  dni: number;

  @Column('varchar', { name: 'email', length: 45, nullable: false })
  email: string

  @Column('enum', { enum: role, enumName: 'role', default: role.CLIENT })
  role: string;

  @CreateDateColumn({ name: 'create_time', nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ name: 'update_time', nullable: false, default: null })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'delete_time', nullable: false, default: null })
  deletedAt: Date;
}

/* 
@Column('varchar', {
    name: 'username',
    length: 25,
    nullable: false,
    unique: true,
  })
  username: string; 

@Column('varchar', { name: 'first_name', length: 45, nullable: false })
firstName: string;

@Column("varchar", { name: 'last_name', length: 45, nullable: false })
lastName: string;

@Column('int', { name: 'id_card_number', nullable: false, unique: true })
dni: number;

*/
