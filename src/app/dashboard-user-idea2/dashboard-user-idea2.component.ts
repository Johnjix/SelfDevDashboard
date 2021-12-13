import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Journal, User } from '../models/dashboard-stats.model';
import { AuthService } from '../services/auth.service';
import { JournalService } from '../services/journal.service';
import { UpdateJournalEntryModalComponent } from '../update-journal-entry-modal/update-journal-entry-modal.component';

@Component({
  selector: 'app-dashboard-user-idea2',
  templateUrl: './dashboard-user-idea2.component.html',
  styleUrls: ['./dashboard-user-idea2.component.css'],
})
export class DashboardUserIdea2Component implements OnInit, OnDestroy {
  user: User;
  userData: UserDashboard2Model;
  allUsers$: Observable<User[]>;
  graphData: any[];
  editGoal: boolean;
  userJournals: Journal[];
  subs: Subscription[];
  cachedScratchBoard: string;
  filterUsers: string;
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
  constructor(
    private _journalService: JournalService,
    private _modalService: NgbModal,
    private _authService: AuthService
  ) {
    this.user = {
      uid: '',
      email: '',
      displayName: '',
      photoURL: '',
    };
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
    this.userJournals = [];
    this.subs = [];
    this.cachedScratchBoard = '';
    this.filterUsers = '';
  }

  ngOnInit(): void {
    // Get User
    const sub1: Subscription = this._authService.user$.subscribe((userData) => {
      this.user = userData;
      console.log('user', this.user);
      this.cachedScratchBoard = this.user.Notes;
    });
    // Get all users
    this.allUsers$ = this._authService.allUsers$;
    // Get User Journals
    const sub: Subscription = this._journalService
      .getUserJournals()
      .subscribe((journalData) => {
        this.userJournals = journalData;
        console.log('user journals', this.userJournals);
        console.log('journal data', journalData);
      });

    this.subs.push(sub1);
    this.subs.push(sub);

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

    // More Mock data
    this.userData.Goal = 'Creating Dashboard Idea 2 from Excel Spreadsheet';
    this.userData.TableEntry[0].Journal =
      'Added New UI idea to a tab, added WYSIWYG editor for scratch board, changed chart to line chart';
    this.userData.TableEntry[1].Journal =
      'Find out how to host back end for free';
    this.userData.TableEntry[2].Journal = 'Solve a mystery';
    this.userData.TableEntry[3].Journal = 'Lead a rebellion';
    this.userData.TableEntry[4].Journal = 'Profit';
    this.userData.TableEntry[5].Journal = '?????????';
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  updateScratchBoard(): void {
    this._authService.updateUserData(this.user);
  }

  updateChart(mode: string, entry: TableEntry, value: number): void {
    this.graphData = [...this.graphData];
    if (mode == 'planned') {
      entry.Planned = value;
    } else {
      entry.Completed = value;
    }
  }

  openCreateJournalEntryModal(): void {
    let newjournalEntry: Journal = {
      uid: '',
      id: '',
      Day: '',
      Planned: 0,
      Completed: 0,
      Journal: '',
    };

    const _modalRef: NgbModalRef = this._modalService.open(
      UpdateJournalEntryModalComponent
    );

    _modalRef.componentInstance.journalEntry = newjournalEntry;
  }

  openUpdateJournalEntryModal(journalEntry: Journal): void {
    const _modalRef: NgbModalRef = this._modalService.open(
      UpdateJournalEntryModalComponent
    );

    _modalRef.componentInstance.journalEntry = journalEntry;
  }
}
export interface UserDashboard2Model {
  Goal: string;
  TableEntry: TableEntry[];
  Scratchboard: string;
}
export interface TableEntry {
  Date: string;
  Planned: number;
  Completed: number;
  Journal: string;
  EditMode: boolean;
}
