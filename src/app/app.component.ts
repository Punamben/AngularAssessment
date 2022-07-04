import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;  

  // data = [
  //   { firstName: 'Rajesh', email: 'rajesh@gmail.com'},
  //   { firstName: 'Paresh', email: 'paresh@gmail.com'},
  //   { firstName: 'Naresh', email: 'naresh@gmail.com'},
  //   { firstName: 'Suresh', email: 'suresh@gmail.com'},
  //   { firstName: 'Karan', email: 'karan@gmail.com'},
  // ];
  // displayedColumns = ['firstName', 'lastName', 'npiNumber', 'email', 'phone', 'businessAddress'];
  
  constructor(private formBuilder: FormBuilder) { }
  title = 'AngularAssessment';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      npiNumber: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      businessAddress: ['', Validators.required,Validators.maxLength(255), Validators.minLength(1)]     
    });
  }

  get fval() { 
    return this.registerForm.controls; 
  }
  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}

export interface UserData {
  firstName: string;
  lastName: string;
  npiNumber: string;
  email: string;
  phone: string;
  businessAddress: string;
}
