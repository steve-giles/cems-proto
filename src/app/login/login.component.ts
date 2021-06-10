import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../backend/auth.service';
import {isTypedRule} from 'tslint';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.authService.accessToken = token;
      this.authService.validToken(token).subscribe(
        (result: boolean) => {
          this.authService.authorized = true;
          this.router.navigate(['/']);
          },
        (error) => {
          debugger;
        });
    }
    //   if (this.token) {
    //     this.isAuthenticated = true;
    //     this.authService.authorized = true;
    //     this.router.navigate(['/']);
    //   }

    if (this.authService.checkAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;
      this.authService.authenticate(username, password).subscribe(
        results => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
          this.loginInvalid = true;
        });
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
