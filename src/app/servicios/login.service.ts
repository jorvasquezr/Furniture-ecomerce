import { Injectable, ViewChild } from '@angular/core';
import { User,UserRole } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarioActual: User= null;

  public usuarios : User[] = [
    {
      name:'vic',
      email: 'string',
      direccion: '200 mts del sol a la izquierda',
      telefono:'2256-2222',
      password:'password',
      tipo: UserRole.GERENTE_GENERAL,
    }
  ]

  constructor() {
    if (localStorage.getItem("users") === null) {
      console.log("お兄ちゃん")
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("users")) as User[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
    Array.prototype.push.apply(this.usuarios,filtered);  ;
    console.log(this.usuarios);
    }
  }

  registrarUsuario(user){
    const arr = JSON.parse(localStorage.getItem('users')) || [];
    arr.push(user);
    this.usuarios.push(user)
    localStorage.setItem('users',JSON.stringify(arr));
  }
  validarUsuario(email,psw){
    for (let i = 0; i < this.usuarios.length; i++) {
      console.log(this.usuarios[i]);
      if(this.usuarios[i].email == email && this.usuarios[i].password== psw){
        if(this.usuarios[i].tipo ==UserRole.CLIENTE){
          window.location.href = '/';this.usuarioActual=this.usuarios[i]}
        if(this.usuarios[i].tipo ==UserRole.GERENTE_GENERAL){
          window.location.href = '/vista-gg';this.usuarioActual=this.usuarios[i]}
        if(this.usuarios[i].tipo ==UserRole.GERENTE){
          window.location.href = '/vista-gerente';this.usuarioActual=this.usuarios[i]}
        if(this.usuarios[i].tipo ==UserRole.EMPLEADO){
          window.location.href = '/vista-empleado';this.usuarioActual=this.usuarios[i]}
      }
    }
  }
}
