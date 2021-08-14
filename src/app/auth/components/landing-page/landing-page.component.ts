import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isLoaded: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    timer(4000).subscribe(x => { this.isLoaded=false })
  }
}
