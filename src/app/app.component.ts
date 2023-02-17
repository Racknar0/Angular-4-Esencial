import { Component } from '@angular/core';
import { Libro } from './common/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto';

  miVar: number = 0;
  miArr = [];
  miLibro: Libro;
  color: string = 'red';
  mostrar: boolean = false;
  mostrar2: boolean = false;
  diasSemana: string = 'lunes';
  colorStyle: string = '';
  libros: Array<Object>;

  constructor() {
    this.miLibro = {
      id: 1,
      titulo: 'El Quijote',
      autor: 'Cervantes',
      descripcion: 'Un libro muy largo',
    };

    this.libros = [ "El Quijote", "El Hobbit", "El Señor de los Anillos"];
  }

  mostrarAutor() {
    alert(this.libros[0]);
  }
}
