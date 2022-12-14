import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('profile')
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;

    @Column() username: string;

    @OneToOne(() => Usuario, usuario => usuario.id)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario
}
