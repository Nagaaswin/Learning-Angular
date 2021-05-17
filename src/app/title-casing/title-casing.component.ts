import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {

  private _text= '';
  constructor() {
  }

  ngOnInit(): void {
  }

  getText() {
    return this._text
  }
  onkeyUp(Title: string) {
    let temp = Title.split(" ");
    let str= '';
    let j =0;
    for (let i of temp) {
      if (i == 'of' || i == 'the' && j++ !=0) {
        str += i;
      } else {
        str += i.charAt(0).toUpperCase();
        str += i.substring(1).toLowerCase();
      }
      str += ' ';
    }
    this._text = str;
  }
}
