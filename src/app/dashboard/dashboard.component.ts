import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/dashboard-stats.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() user: User | null | undefined;

  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {}
}
