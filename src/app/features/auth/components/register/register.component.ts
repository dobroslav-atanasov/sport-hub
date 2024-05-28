import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordLowerCaseValidator, passwordMatchValidator, passwordNonAlphanumericValidator, passwordUpperCaseValidator } from '../../../../shared/validators/validator';

@Component({
  selector: 'sd-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  serverError: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.serverError = '';
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordNonAlphanumericValidator, passwordUpperCaseValidator, passwordLowerCaseValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  get username() {
    return this.registerForm.controls['username'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  signUpHandler() {
    console.log(this.username);
  }
}