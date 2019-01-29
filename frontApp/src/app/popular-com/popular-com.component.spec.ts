import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularComComponent } from './popular-com.component';

describe('PopularComComponent', () => {
  let component: PopularComComponent;
  let fixture: ComponentFixture<PopularComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
