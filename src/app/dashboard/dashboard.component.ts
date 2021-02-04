import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enquireDetails = [
    {
      subward: 'sfg',
      ward: 'fgh',
      name: 'nikhil',
      title: 'as',
      description: 'sd',
      status: 'completed',
      mobilenumber: 9404505206,
      date: '20 May 2020',
      address: 'wakad'
    },
    {
      subward: 'sfg',
      ward: 'fgh',
      name: 'pranjali',
      title: 'as',
      description: 'sd',
      status: 'completed',
      mobilenumber: 9028517277,
      date: '20 May 2020',
      address: 'wakad'
    },
    {
      subward: 'sfg',
      ward: 'fgh',
      name: 'Pranik',
      title: 'as',
      description: 'sd',
      status: 'completed',
      mobilenumber: 9028517277,
      date: '20 May 2020',
      address: 'wakad'
    }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  viewComplaint(enquire) {
    console.log(enquire);
        this.dashboardService.enquire = enquire;
  console.log(this.dashboardService.enquire);
  }
}
