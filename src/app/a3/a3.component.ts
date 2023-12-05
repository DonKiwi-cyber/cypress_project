import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import { B1, B0, Yk } from './functions/linear-regression';
import { correlation } from './functions/correlation';

import { proxy_size, plan_added, actual_added, actual_develop } from './data/data';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit{

  constructor(public dialogRef: MatDialogRef<A3Component>){}

  B1_data1 = 0;
  B0_data1 = 0;
  YK_data1 = 0;

  B1_data2 = 0;
  B0_data2 = 0;
  YK_data2 = 0;

  B1_data3 = 0;
  B0_data3 = 0;
  YK_data3 = 0;

  B1_data4 = 0;
  B0_data4 = 0;
  YK_data4 = 0;

  r_data1 = 0;
  rr_data1 = 0;

  r_data2 = 0;
  rr_data2 = 0;

  r_data3 = 0;
  rr_data3 = 0;

  r_data4 = 0;
  rr_data4 = 0;

  ngOnInit(): void {
    this.B1_data1 = B1(proxy_size, actual_added);
    this.B0_data1 = B0(proxy_size, actual_added, this.B1_data1);
    this.YK_data1 = Yk(this.B1_data1, this.B0_data1, 386);

    this.B1_data2 = B1(proxy_size, actual_develop);
    this.B0_data2 = B0(proxy_size, actual_develop, this.B1_data2);
    this.YK_data2 = Yk(this.B1_data2, this.B0_data2, 386);

    this.B1_data3 = B1(plan_added, actual_added);
    this.B0_data3 = B0(plan_added, actual_added, this.B1_data3);
    this.YK_data3 = Yk(this.B1_data3, this.B0_data3, 386);

    this.B1_data4 = B1(plan_added, actual_develop);
    this.B0_data4 = B0(plan_added, actual_develop, this.B1_data4);
    this.YK_data4 = Yk(this.B1_data4, this.B0_data4, 386);

    this.r_data1 = correlation(proxy_size, actual_added);
    this.rr_data1 = Math.pow(this.r_data1, 2);

    this.r_data2 = correlation(proxy_size, actual_develop);
    this.rr_data2 = Math.pow(this.r_data2, 2);

    this.r_data3 = correlation(plan_added, actual_added);
    this.rr_data3 = Math.pow(this.r_data3, 2);

    this.r_data4 = correlation(plan_added, actual_develop);
    this.rr_data4 = Math.pow(this.r_data4, 2);
  }

  close(){
    this.dialogRef.close();
  }
}
