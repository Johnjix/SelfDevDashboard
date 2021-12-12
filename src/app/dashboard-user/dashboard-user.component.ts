import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User, Task } from '../models/dashboard-stats.model';
import { AuthService } from '../services/auth.service';
import { TaskUpdateModalComponent } from '../task-update-modal/task-update-modal.component';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css'],
})
export class DashboardUserComponent implements OnInit {
  @Input() user: User;

  editGoal: boolean;
  backlog: Task[];
  planned: Task[];
  completed: Task[];

  constructor(
    private _modalService: NgbModal,
    private _authService: AuthService
  ) {
    this.user = {
      // Name: 'Toast 🍞',
      // Goals: {
      //   Name: 'Build a Dashboard',
      //   Description:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      //   Tasks: [],
      //   StartDate: null,
      //   CompletedDate: null,
      // },
    } as User;
    this.editGoal = false;

    this.backlog = [
      {
        Name: 'Testing',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        PlannedHours: 10,
        ActualHours: 4,
        Completed: false,
      },
      {
        Name: 'Build User Dashboard',
        Description: 'Testing testing',
        PlannedHours: 4,
        ActualHours: 1,
        Completed: false,
      },
      {
        Name: 'Add Drag and Drop',
        Description: 'Drag and drop bruh',
        PlannedHours: 2,
        ActualHours: 7,
        Completed: false,
      },
    ];
    this.planned = [
      {
        Name: 'Build UI Skeleton',
        Description: 'Add the grid',
        PlannedHours: 10,
        ActualHours: 1,
        Completed: false,
      },
    ];
    this.completed = [];
  }

  ngOnInit(): void {}
  calcProgress(): number {
    let backlogLength: number = this.backlog.length;
    let plannedLength: number = this.planned.length;
    let completedLength: number = this.completed.length;
    let total: number = backlogLength + plannedLength + completedLength;

    return (completedLength / total) * 100;
  }
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

  updateGoal(): void {
    this._authService.updateUserData(this.user);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
