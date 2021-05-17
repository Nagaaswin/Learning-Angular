import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: String = '';
  isExpanded: boolean = true;

  onClick(){
    this.isExpanded = !this.isExpanded;
  }
}
