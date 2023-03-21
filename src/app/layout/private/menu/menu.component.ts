import { Component,AfterContentInit } from '@angular/core';

declare var inicializandoMenu:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit{
  ngAfterContentInit(): void {

    inicializandoMenu();
  }

}
