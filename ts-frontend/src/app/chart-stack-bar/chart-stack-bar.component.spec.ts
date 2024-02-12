import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStackBarComponent } from './chart-stack-bar.component';

describe('ChartStackBarComponent', () => {
  let component: ChartStackBarComponent;
  let fixture: ComponentFixture<ChartStackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStackBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartStackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
