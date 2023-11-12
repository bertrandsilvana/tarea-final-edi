import { Controller, Get, Param, Post, Body, Put , Delete} from '@nestjs/common';
import { EmpleadosService } from "./empleados.service";
import { empleadoModel } from "./empleadoModel";

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio: EmpleadosService){}

    @Get()
    getempleado(){
        return this.servicio.empleados;
    }
//1 empleado
    @Get(':id')
    getuser(@Param('id') id): string {
        return this.servicio.getuser(id);
    }
//agrego empleado
    @Post()
    agregoempleado(@Body() empleadoModel: empleadoModel){
       return this.servicio.agregoempleado(empleadoModel);
    }
//modifico empleado
@Put(':id')
modificarempleado(@Body()modelo:empleadoModel, @Param('id')id: string){
    return this.servicio.modificarempleado(id, modelo);

}
//Elimino Empleado
@Delete(':id')
eliminarempleado(@Param('id') id: number) {
return this.servicio.eliminarempleado(id);
}

















}
