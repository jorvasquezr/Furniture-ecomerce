import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Furniture-ecomerce';

  constructor(public router:Router){}

 
  public iniciarSesion(){
    this.router.navigateByUrl('/vista-login')
  }
}
