import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormStudent';
  allUser: any;
  user: any;
  isEdit=false;
  userObj={
    id:'',
    name: '',
    email:'',
    marks:''  
  }

  constructor(private commonService: CommonService){}

  ngOnInit(){
    this.getLatestUser();
  }

  addUser(FormObj: any){
    console.log(FormObj)
    this.commonService.createUser(FormObj).subscribe((response)=>{
    this.getLatestUser();
    })
  }

  getLatestUser(){
    this.commonService.getAllUsers().subscribe((response)=>{
      this.allUser= response
    })
  }

  editUser(user : any){
    this.isEdit= true;
    this.userObj=user;
  }

  deleteUser(user: any){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(){
    this.isEdit= !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

}
