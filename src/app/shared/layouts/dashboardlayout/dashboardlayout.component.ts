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

  // sets an idle timeout of 5 seconds, for testing purposes.
  this.idle.setIdle(60);
  // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
  this.idle.setTimeout(10);
  // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
  this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  this.idle.onIdleEnd.subscribe(() => (this.idleState = 'No longer idle.'));
  this.idle.onTimeout.subscribe(() => {
    //alert( this.idleState);
    this.idleState = 'Timed out!';

    this.timedOut = true;
  });
  this.idle.onIdleStart.subscribe(
    () => (this.idleState = "You've gone idle!")
  );
  this.idle.onTimeoutWarning.subscribe(
    countdown =>
      (console.log(this.idleState = 'You will time out in ' + countdown + ' seconds!'))
  );
  this.reset();
}

reset() {
  this.idle.watch();
  this.idleState = 'Started.';
  this.timedOut = false;
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

