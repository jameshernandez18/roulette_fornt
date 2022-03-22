import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRouletteDetailComponent } from './view-roulette-detail.component';

describe('ViewFeasibilyTrayComponent', () => {
  let component: ViewRouletteDetailComponent;
  let fixture: ComponentFixture<ViewRouletteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRouletteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRouletteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
