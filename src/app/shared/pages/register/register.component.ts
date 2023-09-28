import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      name: new FormControl('', []),
      surname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      passwordConfirm: new FormControl('', []),
    });
  }
}
