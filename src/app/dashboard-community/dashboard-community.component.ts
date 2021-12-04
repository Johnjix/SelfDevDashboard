import { Component, OnInit } from '@angular/core';
import { CommunityStatistics } from '../models/dashboard-stats.model';

@Component({
  selector: 'app-dashboard-community',
  templateUrl: './dashboard-community.component.html',
  styleUrls: ['./dashboard-community.component.css'],
})
export class DashboardCommunityComponent implements OnInit {
  stats: CommunityStatistics[];
  constructor() {
    this.stats = [];
  }

  ngOnInit(): void {
    // Mock Data
    for (let i = 1; i < 31; i++) {
      let stat: CommunityStatistics = {
        Day: (i < 10 ? '0' : '') + i.toLocaleString() + '/04/2021',
        PlannedTotal: Math.floor(Math.random() * 10),
        CompletedTotal: Math.floor(Math.random() * 10),
      };

      this.stats.push(stat);
    }
  }
}
