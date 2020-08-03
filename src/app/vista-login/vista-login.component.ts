import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.scss']
})
export class VistaLoginComponent implements OnInit {

  email= new FormControl('');
  psw= new FormControl('');

  constructor() {
     
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    
    const arr = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if(arr[i].email == this.email.value && arr[i].psw== this.psw.value){
        if(arr[i].tipo=="cliente")
          window.location.href = '/';
        if(arr[i].tipo=='gerente general')
          window.location.href = '/vista-gg';
      }
    }
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
