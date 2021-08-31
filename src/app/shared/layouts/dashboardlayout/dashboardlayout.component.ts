import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { TimesetterComponent } from './Timesetter/Timesetter.component';

@Component({
  selector: 'app-dashboardlayout',
  templateUrl: './dashboardlayout.component.html',
  styleUrls: ['./dashboardlayout.component.scss']
})
export class DashboardlayoutComponent implements OnInit {




isLoggedIn$: Observable<boolean> | undefined;
idleState = 'Not started.';
timedOut = false;
RoleName:string

constructor(private Auth: AuthService,private idle: Idle,public dialog: MatDialog) { }



Logout() {
  this.Auth.logout();
}
title = 'PROCODEIT-FICS';



ngOnInit() {

  this.RoleName =  this.Role(this.Auth.Role);

  console.log(this.RoleName)
  this.isLoggedIn$ = this.Auth.isLoggedIn;


}


Role(id: number): string {
  let role:string
  if(id===1)
  {
    role = 'Administrator';
  }
  else if(id===2){
    role='Client'
  }
  else if(id===3){
    role='Practitioner'
  }
  else if(id===4){
    role='Trainer'
  }
  else if(id===4){
    role='Trainee'
  }
  return role
}

Timer(): void {
  let dialogRef = this.dialog.open(TimesetterComponent, {
    width: '500px',
    height: '300px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}

