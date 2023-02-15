import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent {

  colorLocal:string = 'red';
  
  generarRandom():string{
    return Math.floor(Math.random() * 255).toString();
  }

  colorHex():string{
    this.colorLocal = `#${this.generarRandom()}${this.generarRandom()}${this.generarRandom()}`;
    return this.colorLocal;
  }

}
