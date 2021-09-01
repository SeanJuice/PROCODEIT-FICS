import { Component, OnInit } from '@angular/core';;
import { MatDialog } from '@angular/material/dialog';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService: AuthService, private idle:Idle, private sharedService: SharedService,
   ) { }
  idleState = 'Not started.';
  timedOut = false;
  RoleName:string

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    //this.sharedService.getTime().subscribe(result => {console.log(result)})
    if(this.isLoggedIn$ && this.authService.Role != null && this.authService.loginId !=null) {

      this.Timer();
    }
  }
  onLogout() {
    this.authService.logout();
  }
  title = 'PROCODEIT-FICS';
  Timer() {


    // sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(40);
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

}
