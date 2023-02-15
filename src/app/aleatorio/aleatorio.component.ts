import { Component } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent {

  aleatorio: number = Math.floor(Math.random() * 100);

  constructor() { }

  ngOnInit() {}

}
