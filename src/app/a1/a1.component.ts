import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';

import { media } from './functions/media';
import { stddev } from './functions/stddev';

import { proxy_size, dev_hours } from './data/data';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit{

  constructor(public dialogRef: MatDialogRef<A1Component>){}

  media_proxy_size: number = 0;
  media_dev_hours: number = 0;
  stddev_proxy_size: number = 0;
  stddev_dev_hours: number = 0;

  ngOnInit(): void {
    this.media_proxy_size = media(proxy_size);
    this.media_dev_hours = media(dev_hours);
    this.stddev_proxy_size = stddev(proxy_size, this.media_proxy_size);
    this.stddev_dev_hours = stddev(dev_hours, this.media_dev_hours);
  }

  close(){
    this.dialogRef.close();
  }
}
