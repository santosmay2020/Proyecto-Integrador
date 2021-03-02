//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Http handlers
import { HttpClientModule } from '@angular/common/http';
//Forms
import { FormsModule } from '@angular/forms';
//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Main component
import { AppComponent } from './app.component';
//Custome services
import { DispServices } from './dispositivos/disp.service';
//custome components
import { sanmDispComponent } from './dispositivos/sanm-disp/sanm-disp.component';
import { DispDetalleComponent} from './dispositivos/sm-detalle/sm-detalle.component';
import { sanmIotComponent } from './dispositivos/sanm-iot/sanm-iot.component';



@NgModule({
  declarations: [
    AppComponent,
    sanmDispComponent,
    DispDetalleComponent,
    sanmIotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [DispServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
