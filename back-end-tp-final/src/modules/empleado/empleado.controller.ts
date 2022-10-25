import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UpdateUsuarioDto } from '../usuario/dto/update-usuario.dto';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) { }

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadoService.createNewEmployee(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadoService.findAllEmployees();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.empleadoService.findEmployeeByLegajo(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.empleadoService.updateEmployeeByLegajo(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.deleteEmployeeByLegajo(+id);
  }
}
