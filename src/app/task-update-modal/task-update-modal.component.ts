import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../models/dashboard-stats.model';

@Component({
  selector: 'app-task-update-modal',
  templateUrl: './task-update-modal.component.html',
  styleUrls: ['./task-update-modal.component.css'],
})
export class TaskUpdateModalComponent implements OnInit {
  @Input() addMode: boolean = true;
  @Input() task: Task;

  constructor(public _activeModal: NgbActiveModal) {
    this.task = {
      Name: '',
      Description: '',
      PlannedHours: 0,
      ActualHours: 0,
      Completed: false,
    };
  }

  ngOnInit(): void {}
}
