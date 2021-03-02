import { Component, EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DispServices } from '../disp.service';


@Component({
  selector:'app-sm-detalle',
  templateUrl:'./sm-detalle.component.html'
})
export class DispDetalleComponent{

  @Output() dispCreado=new EventEmitter();

  constructor(public dispService: DispServices){

  }
  
  crearDispo(form:NgForm){
    if(form.invalid){
      return;
    }
    if(form.valid){
      this.dispService.addDisp(
        form.value.nombre,
        form.value.descripcion,
        form.value.estatus,
        form.value.informacion,
        form.value.tipo
      ).subscribe(
        r=>{
          form.resetForm();
          this.dispCreado.emit();
        }, 
        e=>{
            console.log('Error en el servidor: ' + e);
        }
        /*{
          next(res) {
            form.resetForm();
            //this.dispCreado.emit();
          },
          error(err) {
          console.log('Error en el servidor: ' + err)}
          }
        }*/
      );
    }
  }
}


 