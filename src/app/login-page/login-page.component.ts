import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userCred } from './../../assets/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.defaultCred = userCred;
  }
  defaultCred = {};
  userDetails = {};
  submitted = false;
  matched = false;
  val1;
  val2;

  inputForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  onSubmit() {
    this.userDetails = this.inputForm.value;
    this.submitted = true;
    this.val1 = JSON.stringify(this.userDetails);
    this.val2 = JSON.stringify(this.defaultCred);

    if (this.val1 == this.val2) {
      this.router.navigate(['/page1']);
    } else {
      alert('failure');
    }
  }
}
