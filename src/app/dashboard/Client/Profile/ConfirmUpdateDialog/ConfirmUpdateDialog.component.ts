import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { TrainerService } from 'src/app/dashboard/Admin/services/trainer.service';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';
import { PractitionerUserService } from 'src/app/dashboard/Practitioner/services/PractitionerUser.service';

@Component({
  selector: 'app-ConfirmUpdateDialog',
  templateUrl: './ConfirmUpdateDialog.component.html',
  styleUrls: ['./ConfirmUpdateDialog.component.scss'],
})
export class ConfirmUpdateDialogComponent implements OnInit {
  Spinner = false;
  constructor(
    public dialogRef: MatDialogRef<ConfirmUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
    private trainerService: TrainerService,
    //private trainee: TraineeService,
    private practitionerService: PractitionerUserService,

    private AuthServe: AuthService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  Update() {
    this.Spinner = true;

    if (this.data.role === 2) {
      this.clientService.UpdateClient(this.data.clientN).subscribe(() => {
        this.dialogRef.close();
      });
    } else if (this.data.role === 3) {
      //!practitoner
      this.practitionerService.MaintainPractitioner(this.data.clientN).subscribe(() => {
        this.dialogRef.close();
      });
    } else if (this.data.role === 4) {
      //!Trainer
      this.trainerService.MaintainTrainer(this.data.clientN).subscribe(() => {
        this.dialogRef.close();
      });
    } else if (this.data.role === 5) {
      //!Trainee
      this.clientService.UpdateClient(this.data.clientN).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
