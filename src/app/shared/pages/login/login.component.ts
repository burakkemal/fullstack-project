import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedState } from '../../store/shared.reducers';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<SharedState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      rememberMe: new FormControl(false, []),
    });
  }
  submitForm() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      console.log('Login Formu Hatalı iken gönderilmeye çalışıldı.');
      return;
    }
    localStorage.setItem('token', 'Etiya');
    this.store.dispatch(
      login({
        firstName: 'Etiya',
        lastName: 'Akademi',
        username: 'etiyaakademi',
      })
    );
    this.router.navigateByUrl('/');
  }
}
