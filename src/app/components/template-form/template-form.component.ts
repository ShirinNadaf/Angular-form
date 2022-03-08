import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent  {
  userDetails = new User("","","","");
  submitted=false;
  onSubmit(){
    this.submitted=true;
    console.log("first name",this.userDetails.firstName)
    console.log("last name",this.userDetails.lastName)
    console.log("email",this.userDetails.userEmail)
    console.log("password",this.userDetails.password)
  }
}
