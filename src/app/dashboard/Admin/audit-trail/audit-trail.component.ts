import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {

  public query: any = '';
  AuditLog: Array<any>
   constructor(private admin: AdminService) { }

  ngOnInit() {
    this.GetAuditTrail()
  }

  GetAuditTrail() {

    this.admin.GetAuditTrail().subscribe(res =>{
       this.AuditLog =res;
    })
  }
  Export()
  {

  }
}
