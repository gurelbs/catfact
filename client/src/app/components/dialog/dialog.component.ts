import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';

export interface DialogData {
  nickname: string;
  email: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  ngOnInit() {}

  constructor(
    private _snackBar: MatSnackBar,
    public api: ApiService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  openSnackBar(str: string, colorClass: string) {
    this._snackBar.open(str, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', colorClass],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  handleSubmit() {
    if (this.data.nickname.length < 4) {
      this.openSnackBar(
        'Nickname must be at least 4 characters long',
        'mat-accent'
      );
    } else if (
      !this.data.email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      this.openSnackBar('Email must be valid', 'mat-accent');
    } else {
      this.api.createUser(this.data).subscribe((res) => {
        console.log(res);
        if (res.email && res.nickname && res._id) {
          localStorage.setItem('user', JSON.stringify(res));
          this.openSnackBar('Success!', 'mat-primary');
          this.dialogRef.close();
          window.location.reload();
        } else {
          this.openSnackBar('Error!', 'mat-warn');
        }
      });
    }
  }
}
