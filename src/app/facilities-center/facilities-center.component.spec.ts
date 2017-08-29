import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesCenterComponent } from './facilities-center.component';

describe('FacilitiesCenterComponent', () => {
  let component: FacilitiesCenterComponent;
  let fixture: ComponentFixture<FacilitiesCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
