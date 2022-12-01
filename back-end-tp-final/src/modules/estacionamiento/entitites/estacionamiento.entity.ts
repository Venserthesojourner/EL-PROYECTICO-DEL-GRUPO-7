import { Propietario } from '../../propietario/entities/propietario.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Empleado } from '../../empleado/entities/empleado.entity';
import { TimestampProvider } from 'rxjs';

@Entity('estacionamientos')
export class Estacionamiento extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    name: 'razon_social',
    length: 45,
    nullable: true,
    default: null,
  })
  razonSocial: string;

  @Column('int', { name: 'capacidad_maxima', nullable: false })
  capacidadMaxima: number;

  @OneToOne(() => Propietario, (propietario) => propietario.idUsuario)
  @JoinColumn({ name: 'propietario_id' })
  propietario: Propietario;

  @OneToMany(() => Empleado, (empleado) => empleado.legajoEmpleado)
  empleados: Empleado[]

  @CreateDateColumn({ name: 'created_at', default: 'TIMESTAMP' })
  createdAt: TimestampProvider;
  @UpdateDateColumn({ name: 'updated_at', onUpdate: 'TIMESTAMP' })
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
