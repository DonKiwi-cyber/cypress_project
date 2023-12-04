import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';

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

  err = ""

  ngOnInit(): void {}

  close(){
    this.dialogRef.close();
  }

  realizeFunction(){
    if (this.dof != 0){
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

  disabled(){
    let varDof = document.getElementById("dof") as HTMLInputElement;
    if (this.function == "t_student"){
      varDof.disabled = false;
    }
    else{
      varDof.disabled = true;
      this.dof = 0;
    }
  }
}
