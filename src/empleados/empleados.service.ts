import { Injectable } from '@nestjs/common';
import { empleadoModel } from "./empleadoModel";
@Injectable()
export class EmpleadosService {

    empleados = [];
    constructor() {
        let empleado = {
            "id": "1",
            "nombre": "Bueno Javier",
            "telefono": 114967678,
            "salario": 200000
        }
        this.empleados.push(empleado);
        empleado = {
            "id": "2",
            "nombre": "Andre Rodriguez",
            "telefono": 111145545456,
            "salario": 850000
        }
        this.empleados.push(empleado);
    }

    getempleado(){
        return this.empleados;
    }
    getuser(id:string){
        return this.empleados.find(u=>u.id===id);
    }
    agregoempleado(empleadoModel: empleadoModel){
        let empleado={
            "id": empleadoModel.id,
            "nombre": empleadoModel.nombre,
            "telefono": empleadoModel.telefono,
            "salario": empleadoModel.salario,

        }
        this.empleados.push(empleado);
        return "empleado agregado";
    }
    modificarempleado(id: string, empleadoModel:empleadoModel){
        for (let index = 0; index < this.empleados.length; index++) {
            if (id = this.empleados[index].id) {
                this.empleados[index].salario = empleadoModel.salario;
                return "modifique el salario";   
            } else {
                return " no se pudo modificar";
            }
        }
    }
eliminarempleado(id: number){
    for (let index = 0; index < this.empleados.length; index++) {
        if(id = this.empleados[index].id) {
            this.empleados.splice(id,1);
            return "empleado eliminado";
        } 
    }
}




}
