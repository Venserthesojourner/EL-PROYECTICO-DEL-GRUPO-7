import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadoService {
    constructor(
        @Inject('EMPLEADO_REPOSITORY')
        private readonly empleadoRepo: Repository<Empleado>
    ) { }

    async createNewEmployee(payload): Promise<Empleado> {
        let newEmployee = await this.empleadoRepo.save(payload);
        return newEmployee
    }

    async findAllEmployees() {
        const listofEmpleados = await this.empleadoRepo.find(
            {
                relations: {
                    estacionamiento: true
                }
            }
        )
        return listofEmpleados;
    }

    async findEmployeeByLegajo(id) { }

    async updateEmployeeByLegajo(payload, id) {
        await this.empleadoRepo.update(id, payload);
        const updatedUser = await this.empleadoRepo.find({
            where: { legajoEmpleado: id },
            relations: {
                estacionamiento: true
            },
        });
        return updatedUser;
    }

    async deleteEmployeeByLegajo(id) { }
}
