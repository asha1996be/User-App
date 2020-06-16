import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Shared/services/login.service';
import { urlPath } from '../constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  submitted = false;

  invalidCredentials = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.value.email === 'asha@gmail.com' && this.loginForm.value.password === '12345'){
      this.router.navigate([urlPath.userList]);
      localStorage.setItem('token', 'abcde');
    }
    // this.loginService.login({ email: this.loginForm.value.email, password: this.loginForm.value.password })
    //   .subscribe((res: any) => {
    //     if (res.token) {
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate([urlPath.userList]);
    //     } else {
    //       this.invalidCredentials = true;
    //     }
    //   }, (err) => {
    //     this.invalidCredentials = true;
    //   });
  }
}
