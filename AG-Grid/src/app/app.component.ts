import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siemens';
  displayVal='';
  displayVal1='';
  address='';
  user='';
  currentVal='';
  currentVal1='';
  vowels: any[12] = ['a' ,'e', 'i' ,'o', 'u', 'A', 'E' , 'I', 'O', 'U'];

 
 
  getValue1(val: any){
      console.warn(val)
      this.currentVal=val
  }

  getValue2(val1: any){
    console.warn(val1)
    this.currentVal1=val1
  }

  
  getValue(val: string,val1 :string)
  {
    console.warn(val,val1)
    this.displayVal=val
    this.displayVal1=val1
    
  }
  
  


}
