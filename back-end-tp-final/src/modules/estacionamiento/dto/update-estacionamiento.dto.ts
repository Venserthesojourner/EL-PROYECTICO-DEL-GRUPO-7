import { PartialType } from "@nestjs/mapped-types";
import { CreateEstacionamientoDto } from "./create-estacionamiento.dto";

export class UpdateEstacionamientoDto extends PartialType(CreateEstacionamientoDto) { }