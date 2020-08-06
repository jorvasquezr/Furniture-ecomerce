import { Component, Inject } from '@angular/core';
import {DialogData} from './dialog-data'
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-evaluacion',
  templateUrl: './dialogo-evaluacion.component.html',
  styleUrls: ['./dialogo-evaluacion.component.scss']
})
export class DialogoEvaluacionComponent {
  error1="Completa la evaluación para enviar"
  isError=false;

  constructor(
    public dialogRef: MatDialogRef<DialogoEvaluacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  calificarProducto(calificacion){
    this.isError=false;
    this.data.producto=calificacion;
  }
  matDialogClose(){
    if(this.data.entrega>0 && this.data.producto>0){
       this.dialogRef.close(this.data);
    }else{
      this.isError=true;
    }

  }
  calificarEntrega(calificacion){
    this.isError=false;
    this.data.entrega=calificacion;
  }


}
