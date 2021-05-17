import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  bloodGroup = [
    { id: 1, name: 'A+' },
    { id: 2, name: 'O+' }
];

  log(x: any) {
    console.log(x);
  }
  submit(f: any) {
    console.log(f);
  }
}
