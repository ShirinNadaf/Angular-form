import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  form =this.fb.group({
    fullName : [''],
    email : [''],
    userName : [''],
    password : [''],
    confirmPassword : ['']
});

ngOnInit(): void {
}
onSubmit(){
console.log("reactive form",this.form.value)
}

}
