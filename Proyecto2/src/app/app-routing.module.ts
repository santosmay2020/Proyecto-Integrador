import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiauDispComponent } from './dispositivos/liau-disp/liau-disp.component';
import { LiauIotComponent } from './dispositivos/liau-iot/liau-iot.component';

const routes: Routes = [
  {path:'', component: LiauIotComponent},
  {path:'create', component: LiauDispComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
