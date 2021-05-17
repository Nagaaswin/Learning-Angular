import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  constructor() {
    this.likesCount = 0;
    this.isActive = false;
  }

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
