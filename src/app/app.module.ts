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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCommunityComponent,
    DashboardUserComponent,
    TaskUpdateModalComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
