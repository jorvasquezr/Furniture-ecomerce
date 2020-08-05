import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from "../servicios/login.service"
import {Location} from '@angular/common';
@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent implements OnInit {

  email= new FormControl('');
  psw= new FormControl('');

  constructor(private auth : LoginService, private location: Location) {
     
  }

  ngOnInit(): void {
  }
  cancel(){
    this.location.back(); 
  }
  
  onSubmit() {
    this.auth.validarUsuario(this.email.value,this.psw.value);
    
    /*
    arr.forEach(function(element){
      console.log(element);
      if(element.email == gemail.value && element.psw== gpsw.value){
        if(element.tipo=="cliente"){
          window.location.href = '/';console.log("uwuwewe");}
        if(element.tipo=='gerente general')
          window.location.href = '/vista-gg';
      }
    });
    */
  }
}
