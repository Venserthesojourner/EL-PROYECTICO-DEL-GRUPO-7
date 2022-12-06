import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlanMensual } from "../../plan-mensual/entities/plan-mensual.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity('vehiculo')
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'patente' })
    patente: string

    @OneToOne(() => Usuario, usuario => usuario.id)
    titular: Usuario

    @ManyToMany(() => PlanMensual, subscripcion => subscripcion.codigo)
    subscripcion: PlanMensual[]
}