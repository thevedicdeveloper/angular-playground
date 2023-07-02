export interface CourseResponse {
  payload: ICourse[]
}

export interface ICourse {
    id: number;
    description: string;
    iconUrl: string;
    courseListIcon: string;
    category: 'BEGINNER' | 'ADVANCED';
    lessonsCount: number;
  }
  