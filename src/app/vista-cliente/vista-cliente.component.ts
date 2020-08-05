import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.scss']
})
export class VistaClienteComponent implements OnInit {
  page:String = '';
  name:String = '';
  
  constructor(public router:Router, public activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(params => {
      this.page=params.param;
    });

  

  }

 
  public iniciarSesion(){
    this.router.navigateByUrl('vista-login')
  }
  

  public pageSet(nombre:String) {
    this.router.navigateByUrl('cliente/'+nombre);    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); 
    console.log(id);
      

  }

}
