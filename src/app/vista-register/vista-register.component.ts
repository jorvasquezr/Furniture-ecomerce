import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from "../servicios/login.service"
import { User,UserRole } from '../models/user.model';

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

  constructor(private auth : LoginService) {
     
  }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    const user: User = {
      email: this.email.value,
      name: this.name.value,
      password: this.psw.value,
      direccion: this.direccion.value,
      telefono: this.phone.value,
      tipo: UserRole.CLIENTE
    };
    this.auth.registrarUsuario(user);
  }
}
