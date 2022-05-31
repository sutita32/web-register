export class Class {
  class_id:  number;
  class_name: string;
  Total_rg_st: number;
  Total_rg_st_max: number;
  starttime:  string;
  endtime:  string;
  day: string;
  course_id: string;
  Teach_id: string;
  constructor (class_id:  number,class_name: string,Total_rg_st: number,Total_rg_st_max: number,starttime:  string,endtime:  string,day: string,course_id: string,Teach_id: string) {
    this.class_id= class_id;
    this.class_name= class_name;
    this.Total_rg_st= Total_rg_st;
    this.Total_rg_st_max= Total_rg_st_max;
    this.starttime=  starttime;
    this.endtime=  endtime;
    this.day=day;
    this.course_id= course_id;
    this.Teach_id= Teach_id;
  }
  clear(){
    // this.class_id='';
    // this.class_name='';
    // this.Total_rg_st=0;
    // this.Total_rg_st_max='';
    // this.starttime='';
    // this.endtime=0;
    // this.day='';
    // this.course_id='';
    // this.credit=0;

  }
}
