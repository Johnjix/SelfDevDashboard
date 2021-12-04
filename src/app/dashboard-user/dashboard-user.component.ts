import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User, Task } from '../models/dashboard-stats.model';
import { TaskUpdateModalComponent } from '../task-update-modal/task-update-modal.component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  user: User;
  editGoal: boolean;
  backlog: Task[];
  planned: Task[];
  completed: Task[];

  constructor(private _modalService: NgbModal) {
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

    this.backlog = [];
    this.planned = [];
    this.completed = [];
  }

  ngOnInit(): void {}

  openUpdateTaskModal(
    task: Task | null,
    addMode: boolean = false,
    targetArray: Task[]
  ): void {
    if (!task) {
      task = {
        Name: '',
        Description: '',
        PlannedHours: 0,
        ActualHours: 0,
        Completed: false,
      };
    }

    let _modalRef: NgbModalRef = this._modalService.open(
      TaskUpdateModalComponent
    );

    _modalRef.componentInstance.task = task;
    _modalRef.componentInstance.addMode = addMode;

    _modalRef.result.then(
      (newTask) => {
        if (addMode) {
          // Add Task
          targetArray.push(newTask);
          console.log('new task', newTask);
        }
      },
      () => {
        // Rejected, do nothing
      }
    );
  }
}
