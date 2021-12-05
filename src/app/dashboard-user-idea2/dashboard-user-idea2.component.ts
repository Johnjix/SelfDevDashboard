import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-idea2',
  templateUrl: './dashboard-user-idea2.component.html',
  styleUrls: ['./dashboard-user-idea2.component.css'],
})
export class DashboardUserIdea2Component implements OnInit {
  userData: UserDashboard2Model;
  graphData: any[];
  editGoal: boolean;
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
  // Scratch Board
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      // [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      //['clean'], // remove formatting button

      ['link', 'image'], // link and image, video
    ],
  };
  constructor() {
    this.editGoal = false;
    this.userData = {
      Goal: '',
      TableEntry: [],
      Scratchboard: '',
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
    console.log(this.graphData[1].series[0]);
  }

  updateChart(mode: string, entry: TableEntry, value: number): void {
    this.graphData = [...this.graphData];
    if (mode == 'planned') {
      entry.Planned = value;
    } else {
      entry.Completed = value;
    }
  }
}
export interface UserDashboard2Model {
  Goal: '';
  TableEntry: TableEntry[];
  Scratchboard: '';
}
export interface TableEntry {
  Date: string;
  Planned: number;
  Completed: number;
  Journal: string;
  EditMode: boolean;
}
