import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  form = new FormGroup({
    fullName : new FormControl(''),
    email : new FormControl(''),
    userName : new FormControl(''),
    password : new FormControl(''),
    conformPassword : new FormControl('')

});

constructor() { }

ngOnInit(): void {
}
onSubmit(){
console.log(this.form.value)
}
 

}
