import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserIdea2Component } from './dashboard-user-idea2.component';

describe('DashboardUserIdea2Component', () => {
  let component: DashboardUserIdea2Component;
  let fixture: ComponentFixture<DashboardUserIdea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserIdea2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserIdea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
