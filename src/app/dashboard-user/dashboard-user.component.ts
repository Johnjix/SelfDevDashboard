import { Component, OnInit } from '@angular/core';
import { User } from '../models/dashboard-stats.model';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  user: User;
  editGoal: boolean;
  constructor() {
    this.user = {
      Name: 'Toast 🍞',
      Goals: {
        Name: '',
        Description: '',
        Tasks: [],
        StartDate: null,
        CompletedDate: null,
      },
    };
    this.editGoal = false;
  }

  ngOnInit(): void {}
}
