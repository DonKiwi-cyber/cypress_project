import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { A1Component } from '../a1/a1.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {

  constructor(public dialog: MatDialog){}

  openA1(){
    const dialog1 = this.dialog.open(A1Component)
  }
}
