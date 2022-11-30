import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Usuario } from "../../usuario/entities/usuario.entity"

export class CreatePropietarioDto {
    /* @Type(() => Usuario)
    @ValidateNested()
    idUsuario: Usuario */

    idUsuario: number
}