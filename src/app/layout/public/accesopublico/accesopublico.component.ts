import { Component, AfterContentInit } from '@angular/core';

declare var inicializandoMenu:any;

@Component({
  selector: 'app-accesopublico',
  templateUrl: './accesopublico.component.html',
  styleUrls: ['./accesopublico.component.scss']
})
export class AccesopublicoComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    inicializandoMenu();
  }

}
