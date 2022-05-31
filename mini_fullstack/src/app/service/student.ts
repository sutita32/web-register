export class Student {
  constructor (
    public std_id: string,
    public std_name: string,
    public std_password: string,
    public std_major: string,
    public std_branch: string,
    public std_sex: string
    ) {}
  clear(){
    this.std_id='';
    this.std_name='';
    this.std_password='';
    this.std_major='';
    this.std_branch='';
    this.std_sex='';
  }
}
