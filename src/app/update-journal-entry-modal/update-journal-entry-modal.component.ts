import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Journal } from '../models/dashboard-stats.model';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-update-journal-entry-modal',
  templateUrl: './update-journal-entry-modal.component.html',
  styleUrls: ['./update-journal-entry-modal.component.css'],
})
export class UpdateJournalEntryModalComponent implements OnInit {
  @Input() journalEntry: Journal;

  constructor(
    public _activeModal: NgbActiveModal,
    private _journalService: JournalService
  ) {}

  ngOnInit(): void {}

  disableSave(): boolean {
    if (this.journalEntry.Day == '' || this.journalEntry.Planned == 0) {
      return true;
    } else {
      return false;
    }
  }

  async updateJournal(): Promise<void> {
    if (this.journalEntry.id == '') {
      await this._journalService.createJournal(this.journalEntry);
    } else {
      await this._journalService.updateJournal(this.journalEntry);
    }

    this._activeModal.close();
  }
}
