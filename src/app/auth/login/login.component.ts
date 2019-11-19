import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  loginAccount = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });
  ngOnInit() {
  }
  get email() { return this.loginAccount.get('email'); }
  get password() { return this.loginAccount.get('password'); }
  onSubmit() {
    return;
  }
}
