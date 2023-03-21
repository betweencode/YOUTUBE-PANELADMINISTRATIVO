

import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


declare var select: any;
declare var on: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = environment.title;

  constructor(){

  }
  ngOnInit(): void {

  }
}
