import { Component, OnInit } from '@angular/core';
import { Disp} from '../disp.model';
import { DispServices } from '../disp.service';

@Component({
  selector:'app-sanm-iot',
  templateUrl:'./sanm-iot.component.html',
  styleUrls:['./sanm-iot.component.css']
})
export class LiauIotComponent implements OnInit{
  listadoDispositivos:Disp[]=[];

  constructor(public dispService: DispServices){

  }

  ngOnInit(): void {
    this.dispService.getAll().subscribe(r=>{
      this.listadoDispositivos=r;
    });
  }
}
