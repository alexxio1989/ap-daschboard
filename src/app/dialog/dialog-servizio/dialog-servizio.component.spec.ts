import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogServizioComponent } from './dialog-servizio.component';

describe('DialogServizioComponent', () => {
  let component: DialogServizioComponent;
  let fixture: ComponentFixture<DialogServizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogServizioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogServizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
