import { Estacionamiento } from "../../estacionamiento/entitites/estacionamiento.entity";

export class CreateEmpleadoDto {
    usuario: number;
    estacionamiento: Estacionamiento
    legajoEmpleado: string
    horarioSalida: string
    horarioEntrada: string
}