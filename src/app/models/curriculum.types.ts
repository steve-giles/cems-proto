export interface CurriculumData {
  id: number;
  name: string;
  description: string;
  sendCourseReminder: boolean;
  companyId: number;
  courses: Course[];
}

export interface Course {
  id: number;
  name: string;
  dueDays: number;
  availableDays: number;
  isSoftDueDate: boolean;
}
