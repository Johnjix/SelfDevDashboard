import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/dashboard-stats.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-account-modal',
  templateUrl: './user-account-modal.component.html',
  styleUrls: ['./user-account-modal.component.css'],
})
export class UserAccountModalComponent implements OnInit {
  @Input() user: User;

  constructor(
    public _activeModal: NgbActiveModal,
    private _authService: AuthService
  ) {
    this.user = {} as User;
  }

  ngOnInit(): void {}

  async updateUser(): Promise<void> {
    await this._authService.updateUserData(this.user);
    this._activeModal.close();
  }
}
