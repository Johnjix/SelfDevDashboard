import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJournalEntryModalComponent } from './update-journal-entry-modal.component';

describe('UpdateJournalEntryModalComponent', () => {
  let component: UpdateJournalEntryModalComponent;
  let fixture: ComponentFixture<UpdateJournalEntryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJournalEntryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJournalEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
