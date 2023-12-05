import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import { t_student } from './functions/t-student';
import { simpson } from './functions/simpson';
import { error } from './functions/common/common';

@Component({
  selector: 'app-a5',
  templateUrl: './a5.component.html',
  styleUrls: ['./a5.component.css']
})
export class A5Component implements OnInit{

  constructor(public dialogRef: MatDialogRef<A5Component>){}

  x0 = 0;
  x1 = 0;
  num_seg = 0;
  Error = 0;
  function = "";
  dof = 0;

  result = 0;
  type = "";
  err = "";

  empty = true;

  ngOnInit(): void {}

  close(){
    this.dialogRef.close();
  }

  realizeFunction(){
    if(this.ifEmpty()==true){
      if (this.function == "t_student"){
        this.result = t_student(this.x0, this.x1, this.function, this.num_seg, this.dof);
        const result2 = t_student(this.x0, this.x1, this.function, this.num_seg*2, this.dof);
        if (error(this.result, result2, this.Error) == true){
          this.err = "aprobado"
        }
        else{
          this.err = "desaprobado"
        }
        this.type = "T-student:"
      }
      else{
        this.result = simpson(this.x0, this.x1, this.num_seg, this.function);
        const result2 = simpson(this.x0, this.x1, this.num_seg, this.function);
        if (error(this.result, result2, this.Error) == true){
          this.err = "aprobado"
        }
        else{
          this.err = "desaprobado"
        }
        this.type = "Simpson:"
      }
    }
    else{
      this.result = 0
      this.type = "información deficiente"
      this.err = "información deficiente"
    }
  }

  disabled(){
    let varDof = document.getElementById("dofInput") as HTMLInputElement;
    if (this.function == "t_student"){
      varDof.disabled = false;
    }
    else{
      varDof.disabled = true;
      this.dof = 0;
    }
  }

  ifEmpty(): boolean{
    let value: boolean;
    if (this.function == "t_student"){
      if(this.x0 == null || this.x1 == null || this.num_seg == null || 
        this.Error == null || this.dof == null){
          value = false;
        }
        else{
          value = true;
        }
    }
    else{
      if(this.x0 == null || this.x1 == null || this.num_seg == null || 
        this.Error == null || this.function == null){
          value = false;
        }
        else{
          value = true;
        }
    }
    return value;
  }
}
