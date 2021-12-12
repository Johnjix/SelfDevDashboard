import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from './models/dashboard-stats.model';
import { AuthService } from './services/auth.service';
import { UserAccountModalComponent } from './user-account-modal/user-account-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SelfDevDashboard';
  user: User | null | undefined;
  constructor(
    public _authService: AuthService,
    private _modalService: NgbModal
  ) {
    // Get User
    this._authService.user$.subscribe((userData) => (this.user = userData));
  }

  openUserModal(): void {
    let _modalRef: NgbModalRef = this._modalService.open(
      UserAccountModalComponent
    );

    _modalRef.componentInstance.user = JSON.parse(JSON.stringify(this.user));
  }
}
