export class Teacher {
  constructor (
    public Teach_id: string,
    public Teach_name: string,
    public Teach_password: string,
    public Teach_level: string,
    ) {}
  clear(){
    this.Teach_id='';
    this.Teach_name='';
    this.Teach_password='';
    this.Teach_level='';
  }
}
