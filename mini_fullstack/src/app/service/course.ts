export class Course {
  constructor (
    public course_id: string,
    public course_name: string,
    public credit: number,
    ) {}
  clear(){
    this.course_id='';
    this.course_name='';
    this.credit=0;
  }
}
