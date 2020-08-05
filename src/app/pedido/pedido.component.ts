import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http"
import { MatSelect, MatExpansionPanel, MatStep } from '@angular/material';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  formulario:boolean;

  provincias: Array<String>=[];
  cantones:Array<String>=[];
  distritos:Array<String>=[];
  meses:Array<String>=["01","02","03","04","05","06","07","08","09","10","11","12"];
  anyos:Array<String>=[];

  indexProvincia:number;
  indexCanton:number;
  indexDistrito:number;


  constructor(private http: HttpClient,private _formBuilder: FormBuilder) {
    this.listaDeProvincias();
    this.setNextYears();

  }
  setNextYears(){
    const actualYear=(new Date()).getFullYear();
    this.anyos.push(actualYear.toString())
    for(let i = 0; i<8;i++){
      this.anyos.push((actualYear+i).toString())
    }

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      calle: ['', Validators.required],
      solicitudDeEnvio:[false, Validators.required],
      provincia: ['',Validators.required],
      direccion: ['',Validators.required],
      canton: ['',Validators.required],
      distrito: ['',Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      numeroTargeta: ['', Validators.required],
      nombreTargerta: ['', Validators.required],
      mesVencimiento: ['', Validators.required],
      annyoVencimiento: ['', Validators.required],
      csv: ['', Validators.required]
    });
  }
  listaDeProvincias() {
    this.http.get("https://ubicaciones.paginasweb.cr/provincias.json").subscribe(data=>{
      this.provincias=Object.values(data);
   

    })
  }
  listaDeCantones(provincia:number) {
    if(provincia !==undefined){
    this.http.get("https://ubicaciones.paginasweb.cr/provincia/"+provincia+"/cantones.json").subscribe(data=>{
      this.cantones=Object.values(data);
    })
  }
  }
  listaDeDistritos(provincia:number, canton:number) {
    if(provincia!==undefined && canton !==undefined){
    this.http.get("https://ubicaciones.paginasweb.cr/provincia/"+provincia+"/canton/"+canton+"/distritos.json").subscribe(data=>{
      this.distritos=Object.values(data);
    })
  }
  }
  
  provinciaChange(){  
    if(this.provincias!==[]){
    this.listaDeCantones(this.provincias.indexOf(this.firstFormGroup.controls["provincia"].value)+1)
    this.firstFormGroup.controls["canton"].setValue("")
    this.firstFormGroup.controls["distrito"].setValue("")
    }
  }
  cantonChange(){
    if(this.cantones!==[] && this.provincias!=[]){
    this.listaDeDistritos(this.provincias.indexOf(this.firstFormGroup.controls["provincia"].value)+1,
                          this.cantones.indexOf(this.firstFormGroup.controls["canton"].value)+1)

    this.firstFormGroup.controls["distrito"].setValue("")
    }
  }
  public mostrar(){
    console.log(this.secondFormGroup)

  }
  formularioEnvio(expansion:MatExpansionPanel,matStep:MatStep){
    
    let value=this.firstFormGroup.controls["solicitudDeEnvio"].value
    matStep.optional=!value;
    expansion.disabled=value;
    expansion.expanded=value;
  }


}
