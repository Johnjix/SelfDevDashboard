import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateModalComponent } from './task-update-modal.component';

describe('TaskUpdateModalComponent', () => {
  let component: TaskUpdateModalComponent;
  let fixture: ComponentFixture<TaskUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
