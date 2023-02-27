import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDashboardLibComponent } from './ap-dashboard-lib.component';

describe('ApDashboardLibComponent', () => {
  let component: ApDashboardLibComponent;
  let fixture: ComponentFixture<ApDashboardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApDashboardLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApDashboardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
