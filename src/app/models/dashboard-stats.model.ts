export interface DashboardData {
  User: User;
}
export interface Task {
  Name: string;
  Description: string;
  StartDate?: Date;
  EndDate?: Date;
  Completed: boolean;
}
export interface Goal {
  Name: string;
  Description: string;
  Tasks: Task[];
  StartDate: Date | null;
  CompletedDate: Date | null;
}
export interface User {
  Name: string;
  Goals: Goal;
}
