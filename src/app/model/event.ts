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

  id:number | null;
  name:string|null;
  description:string|null;
  location:string|null;
  startDate:Date|null;
  endDate:Date|null;
  imgURL:string|null;


  constructor(id:number|null,name:string|null,description:string|null,location:string|null,startDate:Date|null,endDate:Date|null,imgURL:string|null) {

    this.id=id;
    this.name=name;
    this.description=description;
    this.location=location;
    this.startDate=startDate;
    this.endDate=endDate;
    this.imgURL=imgURL;

  }
}
