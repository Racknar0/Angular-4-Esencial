import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UncomponenteComponent } from './uncomponente/uncomponente.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    UncomponenteComponent,
    AleatorioComponent,
    ColoresComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
