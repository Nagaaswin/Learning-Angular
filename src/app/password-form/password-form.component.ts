import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from './password.validators';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  form = new FormGroup({
    oldPass: new FormControl('', [Validators.required],
      passwordValidators.shouldBeUnique),
    newPass: new FormControl('', Validators.required),
    confirmPass: new FormControl('', [
      Validators.required,
    ])
  },passwordValidators.passwordsShldMatch);
  get oldPass() {
    return this.form.get('oldPass');
  }
  get newPass() {
    return this.form.get('newPass');
  }
  get confirmPass() {
    return this.form.get('confirmPass');
  }
}
