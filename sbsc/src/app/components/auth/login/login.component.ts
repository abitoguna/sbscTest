import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loader: boolean;
  error: boolean;
  errMsg: string;
  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormInit();
  }

  // Initialise form
  loginFormInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // Send form data to API
  submitForm() {
    this.loader = true;
    const data = this.loginForm.value;
    this.service.login(data).subscribe(res => {
      this.loader = false;
      if (res.verification_status === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.error = true;
        this.errMsg = 'Your account has not been verified. Please click on the link sent to your email to verify your account.';
      }
    }, err => {
      this.loader = false;
      this.error = true;
      this.errMsg = 'Something went wrong';
    });
  }

}
