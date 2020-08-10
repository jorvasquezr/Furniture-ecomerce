import { Injectable, ViewChild } from '@angular/core';
import { User,UserRole } from '../models/user.model'
import {CompraService} from './compra.service'
import { elementAt } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  usuarioActual: User;
  public usuarios : User[] = [
    {
      name:'vic',
      lastName:"-kun",
      email: 'gg@gg',
      telefono:'2256-2222',
      password:'gg',
      tipo: UserRole.GERENTE_GENERAL, 
    },
    {
      name:'neura',
      lastName:"neuratic",
      email: 'cliente@cliente',
      telefono:'2256-2256',
      password:'cliente',
      tipo: UserRole.CLIENTE,
    },
    {
      name:'neura',
      lastName:"neuratic",
      email: 'empleado@empleado',
      telefono:'2256-2256',
      password:'empleado',
      tipo: UserRole.EMPLEADO,
    },
    {
      name:'neura',
      lastName:"neuratic",
      email: 'gerente@gerente',
      telefono:'2256-2256',
      password:'gerente',
      tipo: UserRole.GERENTE,
    },
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
 //   var interval = setInterval(()=>{
 //     if(this.usuarioActual!==undefined){
 //     console.log(this.usuarioActual.tipo)
 //   }
//   },200);

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
    console.log(email,psw);
    var usuario = this.usuarios.find(element => element.email===email && element.password===psw);
    if(usuario !== undefined){
      localStorage.setItem('actualUser',JSON.stringify(usuario));
      if(usuario.tipo == UserRole.CLIENTE){
        this.usuarioActual=usuario; window.location.href = '/cliente/tienda';
      }
      if(usuario.tipo == UserRole.GERENTE_GENERAL){
        window.location.href = '/vista-gg';this.usuarioActual=usuario
      }
      if(usuario.tipo == UserRole.GERENTE){
        window.location.href = '/vista-gerente';this.usuarioActual=usuario
      }
      if(usuario.tipo == UserRole.EMPLEADO){
        window.location.href = '/vista-empleado';this.usuarioActual=usuario
      }
    }
  }


}
