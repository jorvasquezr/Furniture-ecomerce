import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-vista-register',
  templateUrl: './vista-register.component.html',
  styleUrls: ['./vista-register.component.scss']
})
export class VistaRegisterComponent implements OnInit {

    email= new FormControl('');
    name= new FormControl('');
    psw= new FormControl('');
    direccion= new FormControl('');
    phone= new FormControl('');

  constructor() {
     
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    const user = {
      email: this.email.value,
      name: this.name.value,
      psw: this.psw.value,
      direccion: this.direccion.value,
      phone: this.phone.value,
      tipo: 'cliente'
    };
    const arr = JSON.parse(localStorage.getItem('users')) || [];
    arr.push(user);
    localStorage.setItem('users',JSON.stringify(arr));
  }
}
