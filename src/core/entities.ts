
export class Course {
  constructor(
    readonly id: number,
    readonly name: string,
  ) {}
}

export interface CourseV2 {
  readonly id: number;
  readonly name: string;
  [propName: string]: any;
}

export interface Card {
  readonly number: number;
  readonly type: number;

  description?: string;
}
