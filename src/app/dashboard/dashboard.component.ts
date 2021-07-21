import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Role: Number | 0;
  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
    this.Role = Number(this.Auth.Role)
  }

}
