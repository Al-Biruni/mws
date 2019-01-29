import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingReleasesComponent } from './up-coming-releases.component';

describe('UpComingReleasesComponent', () => {
  let component: UpComingReleasesComponent;
  let fixture: ComponentFixture<UpComingReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
