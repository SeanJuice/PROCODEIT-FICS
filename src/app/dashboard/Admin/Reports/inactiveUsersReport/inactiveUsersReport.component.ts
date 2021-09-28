import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../reports.service';
declare let google: any;
@Component({
  selector: 'app-inactiveUsersReport',
  templateUrl: './inactiveUsersReport.component.html',
  styleUrls: ['./inactiveUsersReport.component.scss']
})
export class InactiveUsersReportComponent implements OnInit {

    UserRoles: Array<any>;
    option
    initOpts
    form = new FormGroup({
      role: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)

    });



     constructor(private reportService: ReportsService) { }

  ngOnInit() {
    this. getUserRoles();
    this.buildGraph();
  }


  getUserRoles() {

    this.reportService.ViewUserRoles().subscribe(res =>{
        console.log(res);
        this.UserRoles = res;
    })
  }
  getReportResults(date) {
    console.log(date);
    this.reportService.InactiveUsersReport(Number(this.form.controls.role.value),date).subscribe(res=>{
      console.log(res);
      let Data = [];
      res.forEach(element => {
        Data.push([element.Month, element.UsersInactiveSince])
      });

    })
  }
  submit(form){
    console.log(form.role);
  }

  buildGraph()
  {
    this.initOpts = {
      renderer: 'svg',
      width: 300,
      height: 300
    };

    this.option = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }]
    };
  }
}
