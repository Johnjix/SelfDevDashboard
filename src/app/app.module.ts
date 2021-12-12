import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardCommunityComponent } from './dashboard-community/dashboard-community.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { TaskUpdateModalComponent } from './task-update-modal/task-update-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardUserIdea2Component } from './dashboard-user-idea2/dashboard-user-idea2.component';
import { QuillModule } from 'ngx-quill';
import { MatMenuModule } from '@angular/material/menu';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { UserAccountModalComponent } from './user-account-modal/user-account-modal.component';
import { MatChipsModule } from '@angular/material/chips';
import { UpdateJournalEntryModalComponent } from './update-journal-entry-modal/update-journal-entry-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCommunityComponent,
    DashboardUserComponent,
    TaskUpdateModalComponent,
    DashboardUserIdea2Component,
    UserAccountModalComponent,
    UpdateJournalEntryModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    DragDropModule,
    NgxChartsModule,
    QuillModule.forRoot(),
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    MatChipsModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 10000,
        panelClass: 'snackbar_default',
        hasAction: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
