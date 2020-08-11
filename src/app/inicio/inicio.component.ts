import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  value = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    var that = this;
    var datanow = Date.now();
    var interval = setInterval(()=>{
       var time = Math.ceil(( 2*datanow +2000 - Date.now()) / 100)
       this.value=(Math.ceil((((datanow+2000)/100)-time)/2))*10
       console.log(this.value);
    },100);

    var timeout = setTimeout(() => {
      console.log()
      clearInterval(interval);
      this.router.navigateByUrl('/cliente/tienda');
    }, 2000);


   

  }

   
  

}
