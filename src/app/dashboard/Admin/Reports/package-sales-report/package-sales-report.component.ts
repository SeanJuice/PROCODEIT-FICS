import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-package-sales-report',
  templateUrl: './package-sales-report.component.html',
  styleUrls: ['./package-sales-report.component.scss']
})
export class PackageSalesReportComponent implements OnInit {


  constructor(private reportService: ReportsService) { }
  ngOnInit() {
  }

}
