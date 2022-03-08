import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form!:FormGroup;
  submitted=false;
  constructor(private fb: FormBuilder,
   private customValidator: CustomvalidationService ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      FullName :['',Validators.required],
      UserName :['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      Email :['',Validators.required],
      Password :['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(40),this.customValidator.patternValidator()])],
      ConfirmPassword :['',Validators.required],
      checkbox:['',Validators.required]
    },
    {
      validator: this.customValidator.MatchPassword('Password', 'ConfirmPassword'),
    })
    
  }
  get fval() {
    return this.form.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.form.valid) {
      alert('Form Submitted succesfully!'); 
  }
  console.log(this.form.value)
}
onReset(){
  this.submitted=false;
  this.form.reset();
}
}
