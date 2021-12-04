export interface DashboardData {
  User: User;
}
export interface Task {
  Name: string;
  Description: string;
  PlannedHours: number;
  ActualHours: number;
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
export interface CommunityStatistics {
  Day: string;
  PlannedTotal: number;
  CompletedTotal: number;
}
