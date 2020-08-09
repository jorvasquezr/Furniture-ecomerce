import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from "../servicios/login.service"
import { User,UserRole } from '../models/user.model';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-vista-register',
  templateUrl: './vista-register.component.html',
  styleUrls: ['./vista-register.component.scss']
})
export class VistaRegisterComponent implements OnInit {

   registerForm:FormGroup
   submitted = false;


  constructor(private _snackBar:MatSnackBar,private formBuilder: FormBuilder,private location: Location,private auth : LoginService) {
     
  }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      name: ['',Validators.required],
      lastName:['',Validators.required],
      psw: ['',[Validators.required,Validators.minLength(6)]],
      psw2: ['',Validators.required],
      phone: ['',Validators.required]
    },{
      validator: this.MustMatch('psw','psw2')
    })


    
  }
  get f() { return this.registerForm.controls; }
  cancel(){
    this.location.back(); 
  }
  openSnackBar(mensage:string, action:string) {
    this._snackBar.open(mensage, action, {
      duration: 2000,
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  onSubmit() {
    this.submitted=true;
    console.log(this.registerForm.controls.psw2.errors);


    if(this.registerForm.valid){
      const user: User = {
        email: this.registerForm.controls['email'].value,
        name: this.registerForm.controls['name'].value,
        lastName: this.registerForm.controls['name'].value,
        password: this.registerForm.controls['psw'].value,
        telefono: this.registerForm.controls['phone'].value,
        tipo: UserRole.CLIENTE
      };
      var a = this.auth.registrarUsuario(user);
      if(a){
        this.openSnackBar("Usuario registrado correctamente","ok")
        var timeout = setTimeout(() => {
          this.cancel();
        }, 2500);
      }else{
        this.openSnackBar("Error al registrar usuario", "Chale")


      }
  
    }


  }
}
