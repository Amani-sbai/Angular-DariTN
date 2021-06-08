import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsimulationComponent } from './creditsimulation.component';

describe('CreditsimulationComponent', () => {
  let component: CreditsimulationComponent;
  let fixture: ComponentFixture<CreditsimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsimulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
