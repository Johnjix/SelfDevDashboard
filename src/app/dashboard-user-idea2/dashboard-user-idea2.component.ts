import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-idea2',
  templateUrl: './dashboard-user-idea2.component.html',
  styleUrls: ['./dashboard-user-idea2.component.css'],
})
export class DashboardUserIdea2Component implements OnInit {
  userData: UserDashboard2Model;
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
  constructor() {
    this.userData = {
      Goal: '',
      TableEntry: [],
    };
    this.graphData = [
      {
        name: 'Completed',
        series: [],
      },
      {
        name: 'Planned',
        series: [],
      },
    ];
  }

  ngOnInit(): void {
    let seriesDataPlannedEntry: any;
    let seriesDataCompletedEntry: any;

    for (let i = 1; i < 31; i++) {
      let planned: number = Math.floor(Math.random() * 10);
      let data: TableEntry = {
        Date: (i < 10 ? '0' : '') + i.toLocaleString() + '/04/2021',
        Planned: planned,
        Completed: Math.floor(Math.random() * planned),
        Journal: '',
        EditMode: false,
      };

      this.userData.TableEntry.push(data);

      seriesDataPlannedEntry = {
        name: data.Date,
        value: data.Planned,
      };
      seriesDataCompletedEntry = {
        name: data.Date,
        value: data.Completed,
      };

      this.graphData[1].series.push(seriesDataPlannedEntry);
      this.graphData[0].series.push(seriesDataCompletedEntry);
    }
  }
}
export interface UserDashboard2Model {
  Goal: '';
  TableEntry: TableEntry[];
}
export interface TableEntry {
  Date: string;
  Planned: number;
  Completed: number;
  Journal: string;
  EditMode: boolean;
}
