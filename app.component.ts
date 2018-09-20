import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'innoventes';
  rooms:number = 1;
  adults:number=1;
  children:number=0;
  roommn:string="disabled";
  roomps:string;
  adultsmn:string="disabled";
  adultsps:string;
  childrenmn:string="disabled";
 childrenps:string;

roomsplus()
{
  if(this.rooms<5)
  this.rooms = this.rooms+1;
this.roommn="enabled"
 this.roomps="enabled"
this.adultsps="enabled"
this.childrenps="ënabled"
   if(this.rooms>4)
   this.roomps="disabled"

}
roomsminus()
{
  this.adultsps="disabled"
  this.childrenps="disabled"
  if(this.rooms>1)
  {
    this.rooms = this.rooms-1;
     if((this.adults+this.children)>this.rooms*4)
     {
       while((this.adults+this.children)!=this.rooms*4)
       {
         if(this.children>0)
          this.children = this.children-1;

        if(this.children==0)
          this.adults = this.adults-1;

       }
       
     }
  }if(this.rooms==1)
    this.roommn="disabled"
  if(this.rooms==4)
  this.roomps="enabled"
}

adultsplus()
{
  if((this.adults+this.children)<this.rooms*4)
  this.adults = this.adults+1;
this.adultsps="enabled"
this.adultsmn="enabled"

   if((this.adults+this.children)==this.rooms*4)
    this.adultsps="disabled"
}

adultsminus()
{
  this.adultsps="enabled"
  this.childrenps="enabled"
  if(this.adults>1)
  {
      this.adults = this.adults-1;

  }
  if(this.adults==1)
  this.adultsmn="disabled"
  if(this.adults==(this.rooms*4)-1)
    this.adultsps="enable"
}

childrenplus()
{
  if((this.adults+this.children)<this.rooms*4)
  this.children = this.children+1;
  this.childrenmn = "enable"
  if((this.adults+this.children)==this.rooms*4)
    this.childrenps="disabled"
}

childrenminus()
{
  this.adultsps="enabled"
  this.childrenps="enabled"
  if(this.children>0)
  this.children = this.children-1;

  if(this.children==0)
  this.childrenmn="disabled"
}

}
