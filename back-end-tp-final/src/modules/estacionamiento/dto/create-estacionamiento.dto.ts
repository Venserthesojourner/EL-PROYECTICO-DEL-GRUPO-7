import { Propietario } from "../../propietario/entities/propietario.entity"


export class CreateEstacionamientoDto {
    razonSocial: string
    capacidadMaxima: number
    propietario: Propietario

}