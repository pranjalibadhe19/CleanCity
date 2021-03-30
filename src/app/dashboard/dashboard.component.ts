import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  enquireDetails = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.enquires();
  }

  viewComplaint(enquire) {
    console.log(enquire);
        this.dashboardService.enquire = enquire;
  console.log(this.dashboardService.enquire);
  }

  enquires() {
    let userEnquires = {status : 1}
    this.dashboardService.enquires(userEnquires).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status) {
        this.enquireDetails = resp.data;
      }
    });
  }

}
