import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './Reports.component';
import { ReportsRoutingModule } from './Reports-routing.module';
import { PackageSalesReportComponent } from './package-sales-report/package-sales-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportscardsComponent } from './Reportscards_landing/Reportscards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),

  ],
  declarations: [ReportsComponent,PackageSalesReportComponent,ReportscardsComponent]
})
export class ReportsModule { }
