import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { ClientService } from 'src/app/dashboard/services/client.service';

@Component({
  selector: 'app-ConfirmUpdateDialog',
  templateUrl: './ConfirmUpdateDialog.component.html',
  styleUrls: ['./ConfirmUpdateDialog.component.scss']
})
export class ConfirmUpdateDialogComponent implements OnInit {
  Spinner= false;
  constructor(
    public dialogRef: MatDialogRef<ConfirmUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService:ClientService ,private AuthServe:AuthService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  Update(){
    console.log(this.data.clientN)
    this.Spinner = true;
    this.clientService.UpdateClient(this.data.clientN).subscribe(()=>{
 
      this.dialogRef.close()
    })
    // this.Spinner =  this.AuthServe.SetLoadingSpanner(request)
   
  }
}
