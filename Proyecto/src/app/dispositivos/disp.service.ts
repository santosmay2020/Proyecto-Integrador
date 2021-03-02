import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disp } from './disp.model';

@Injectable()
export class DispServices{
  private _url:string ="http://localhost:3030/api/disp";

   /* private dispositivos:Disp[]=[
    new Disp("lampara1","lampara sobre escritorio",false, "Apagado",1),
    new Disp("ventilador","Ventilador habitacion 2",true, "Encendido",2),
    new Disp("TV","TV habitacion 1",false, "Apagado",3),
    new Disp("lampara2","lampara sobre buro",true, "Encendido",1)
  ];*/

  constructor (private http:HttpClient){

  }

  getAll():Observable<Disp[]>{
  //getAll(){
    //Regresa una copia del listado
    //return [...this.dispositivos];

    return this.http.get<Disp[]>(this._url);
  }

  addDisp(nombre:string,
    descripcion:string,
    estatus:boolean,
    informacion:string,
    tipo:number):Observable<Disp>{
    const d=new Disp(nombre,descripcion, estatus, informacion,tipo );
    //this.dispositivos.push(d);

    return this.http.post<Disp>(this._url, d);
  }
}
