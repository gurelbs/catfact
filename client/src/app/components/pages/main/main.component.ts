import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user: any = localStorage.getItem('user');
  email: string = '';
  nickname: string = '';
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    if (!this.user) {
      this.openDialog();
    } else {
      this.user = JSON.parse(this.user);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { nickname: this.nickname, email: this.email },
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.nickname = result;
      this.email = result;
    });
  }
}

export class DialogOverviewExampleDialog {}
