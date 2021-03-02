//clase Dispositivo
export class Disp{
//variables
	/*public _id:string;
	public nivel:number;
	public last_conn:Date;*/
  //Constructores
	constructor(
		public nombre:string,
		public descripcion:string,
		public estatus:boolean, //true online - false offline
		public informacion:string, //encendido online - apagado offline
		public tipo:number //1 ventilador, 2 ...
	) {
		this.estatus=estatus||false;
	 }
}