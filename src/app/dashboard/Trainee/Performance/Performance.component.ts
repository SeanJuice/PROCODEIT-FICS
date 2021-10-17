import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ReportsService } from '../../Admin/Reports/reports.service';

@Component({
  selector: 'app-Performance',
  templateUrl: './Performance.component.html',
  styleUrls: ['./Performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  Trainee:any;
  isRequested:boolean;
  isLoading: boolean;
  constructor(private reportService: ReportsService,private authService: AuthService) { }

  ngOnInit() {

  }
  Request(){
    this.isRequested =true;
    this.isLoading = true;
    this.reportService.TraineePerformanceReport(Number(this.authService.loginId)).subscribe((res:any)=>{
      console.log(res);

      this.Trainee = res;
      this.isLoading =false;

    })
  }

}
