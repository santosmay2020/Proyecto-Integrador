import  { Component, OnInit, OnDestroy } from '@angular/core';
import  { Disp} from '../disp.model';
import { DispServices } from '../disp.service';

@Component({
  selector:'app-sanm-disp',
  templateUrl:'./sanm-disp.component.html',
  styleUrls:['./sanm-disp.component.css']
})
export class sanmDispComponent implements OnInit, OnDestroy{
  listadoDispositivos:Disp[]=[];

  constructor(public dispService: DispServices){

  }

  ngOnInit(): void {
    //this.listadoDispositivos=this.dispService.getAll();
    this.dispService.getAll()
    .subscribe(r=>{
      this.listadoDispositivos=r;
    });
  }

  ngOnDestroy(){

  }

  onDispCreado(){
    //Actualizar el listado
    //this.listadoDispositivos=this.dispService.getAll();
    this.dispService.getAll()
    .subscribe(r=>{
      this.listadoDispositivos=r;
    });
  }
}