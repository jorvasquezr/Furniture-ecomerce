import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Furniture-ecomerce';
  page:String = '';
  constructor(){}

  public pageSet(nombre:String) {
    this.page=nombre;
    
  }
}
