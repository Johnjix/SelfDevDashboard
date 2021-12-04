import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { CommunityStatistics } from '../models/dashboard-stats.model';

@Component({
  selector: 'app-dashboard-community',
  templateUrl: './dashboard-community.component.html',
  styleUrls: ['./dashboard-community.component.css'],
})
export class DashboardCommunityComponent implements OnInit {
  stats: CommunityStatistics[];
  graphData: any[];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Progress';
  animations: boolean = true;
  colorScheme: any = {
    domain: ['#64DD17', '#B0BEC5'],
  };
  below = LegendPosition.Below;
  constructor() {
    this.stats = [];
    this.graphData = [];
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

    // Transform for Graph
    this.stats.forEach((stat) => {
      this.graphData.push({
        name: stat.Day,
        series: [
          {
            name: 'Completed',
            value: stat.CompletedTotal,
          },
          {
            name: 'Planned',
            value:
              stat.PlannedTotal - stat.CompletedTotal > 0
                ? stat.PlannedTotal - stat.CompletedTotal
                : 0,
          },
        ],
      });
    });
  }
}
