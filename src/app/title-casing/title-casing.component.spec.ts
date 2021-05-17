import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCasingComponent } from './title-casing.component';

describe('TitleCasingComponent', () => {
  let component: TitleCasingComponent;
  let fixture: ComponentFixture<TitleCasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
