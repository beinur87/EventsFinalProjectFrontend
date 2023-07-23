/*
public class Event {

    private Integer id;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String description;
    private String location;

}

 */

export class Event{
  id:number;
  name:string;
  description:string;
  location:string
  startDate:Date;
  endDate:Date;

  constructor(id:number,name:string,description:string,location:string,startDate:Date,endDate:Date) {

    this.id=id;
    this.name=name;
    this.description=description;
    this.location=location;
    this.startDate=startDate;
    this.endDate=endDate;

  }
}
