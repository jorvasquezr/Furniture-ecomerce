import { Injectable, ViewChild } from '@angular/core';
import { User,UserRole } from '../models/user.model'
import {CompraService} from './compra.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  usuarioActual: User;
  public usuarios : User[] = [
    {
      name:'vic',
      lastName:"-kun",
      email: 'string@str.s',
      telefono:'2256-2222',
      password:'password',
      tipo: UserRole.GERENTE_GENERAL,
    },
    {
      name:'neura',
      lastName:"neuratic",
      email: 'admin@cenyth.com',
      telefono:'2256-2256',
      password:'MyPassword123',
      tipo: UserRole.CLIENTE,
    }
  ]

  constructor() {
    this.usuarioActual=undefined;
    if (localStorage.getItem("users") == null) {
      localStorage.setItem('users',JSON.stringify(this.usuarios));
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("users")) as User[];
      var filtered = filtered.filter(function (el) {return el != null;});
      this.usuarios = filtered;
    }

    if (localStorage.getItem("actualUser") != null) {
      this.usuarioActual = JSON.parse(localStorage.getItem("actualUser")) as User;
    }

  }
  usuarioLogeado():boolean{
    if(this.usuarioActual !== undefined){
      return true;
    }
    return false;
  }
  cerrarSesion():boolean{
    if(this.usuarioActual!== undefined){
      this.usuarioActual=undefined;
      localStorage.removeItem('actualUser');
      return true;
    }
    return false;
  }

  registrarUsuario(user):boolean{
    const arr = JSON.parse(localStorage.getItem('users')) || [];
    arr.push(user);
    this.usuarios.push(user)
    localStorage.setItem('users',JSON.stringify(arr));
    return true;
  }
  validarUsuario(email,psw){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuarios[i].email == email && this.usuarios[i].password== psw){
        if(this.usuarios[i].tipo ==UserRole.CLIENTE){
          this.usuarioActual=this.usuarios[i]; window.location.href = '/cliente/tienda';
          localStorage.setItem('actualUser',JSON.stringify(this.usuarios[i]));
        }
        if(this.usuarios[i].tipo ==UserRole.GERENTE_GENERAL){
          window.location.href = '/vista-gg';this.usuarioActual=this.usuarios[i]
          localStorage.setItem('actualUser',JSON.stringify(this.usuarios[i]));}
        if(this.usuarios[i].tipo ==UserRole.GERENTE){
          window.location.href = '/vista-gerente';this.usuarioActual=this.usuarios[i]
          localStorage.setItem('actualUser',JSON.stringify(this.usuarios[i]));}
        if(this.usuarios[i].tipo ==UserRole.EMPLEADO){
          window.location.href = '/vista-empleado';this.usuarioActual=this.usuarios[i]
          localStorage.setItem('actualUser',JSON.stringify(this.usuarios[i]));}
      }
    }
  }
}
