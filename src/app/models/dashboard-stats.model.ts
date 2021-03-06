export interface DashboardData {
  User: User;
}
export interface Task {
  Name: string;
  Description: string;
  PlannedHours: number;
  ActualHours: number;
  Completed: boolean;
  DateStarted?: Date;
  DateCompleted?: Date;
}
export interface Goal {
  Name: string;
  Description: string;
  Tasks: Task[];
  StartDate: Date | null;
  CompletedDate: Date | null;
}
export interface User {
  // From Google
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  // From Google end
  GoalName?: string;
  GoalStartDate?: string;
  GoalCompletedDate?: string;
  GoalDescription?: string;
  Instagram?: string;
  Linkdin?: string;
  Notes?: string;
  Name?: string;
  Github?: string;
  Twitter?: string;
  Youtube?: string;
  Twitch?: string;
}
export interface CommunityStatistics {
  Day: string;
  PlannedTotal: number;
  CompletedTotal: number;
}
export interface Journal {
  // Dashboard 2
  uid: string;
  id?: string;
  Day?: string;
  Planned?: number;
  Completed?: number;
  Journal?: string;
}

export const MockData = {
  // user: {
  //   id: 99,
  //   name: 'long.integer',
  //   instagram: 'long.integer',
  //   linkedin: 'https://linkedin.com/in/longshong',
  //   github: 'https://github.com/longinteger017',
  //   homepage: 'https://theselfdev.com/',
  //   image_url: 'https://theselfdev.com/user/name',
  // },
  // table: {
  //   date: ['01.01.2021', '02.01.2021'],
  //   goal: ['1', '2'],
  //   done: [],
  //   notes: [],
  // },
  // chart: {
  //   title: 'creating 4 youtube videos',
  //   goal_color: 'blue',
  //   done_color: 'red',
  //   steps: ['days', 'weeks'],
  // },
  // scratch_board: {
  //   formatted_text:
  //     '- research topic X\n- writing script\n- writing storyboard\n-defining cinematic scenes....',
  // },
};
