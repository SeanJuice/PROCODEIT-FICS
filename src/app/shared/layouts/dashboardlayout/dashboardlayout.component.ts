import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboardlayout',
  templateUrl: './dashboardlayout.component.html',
  styleUrls: ['./dashboardlayout.component.scss']
})
export class DashboardlayoutComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.Auth.logout()
  }
}
